require('dotenv').config();
const axios = require('axios');
const {convertDateISO8601, getLastPPFetchDate, convertDateISO8601UTC, dateDiffInDays} = require('../functions/date');
const transaction = require('../models/transactionSchema');
const fetchLog = require('../functions/logging')
const {checkCredit, setName, setNoteSubj} = require('../functions/parse_transactions');
const { getBearerToken } = require('./token');
const logDate = require('../functions/logging');



/*
const fetchTransUrlBase = "https://api.paypal.com/v1/reporting/transactions";
async function fetchTransUrlParams() {
    //Get Last fetched PP TIME for Start Date

    //Placeholder
    //return `?start_date=${TransStartDatePlaceholder}&end_date=${TransEndDatePlaceholder}&fields=all`
    
    //LiveStart Date & EndDate
    return (`?start_date=${await getLastPPFetchDate()}&end_date=${currentDateISO8601()}&fields=all`);
}
async function fetchTransUrl() {
    
    TransUrl = fetchTransUrlBase + await fetchTransUrlParams();
    console.log(TransUrl);
    return TransUrl;

}
*/
async function conf(start, end){

    conf = await {
        method: 'get',
        //url: `https://api.paypal.com/v1/reporting/transactions?start_date=${await getLastPPFetchDate()}&fields=all&end_date=${currentDateISO8601()}`,
        url: `https://api.paypal.com/v1/reporting/transactions?start_date=${start.toISOString()}&fields=all&end_date=${end.toISOString()}`,
        // url: `https://api.paypal.com/v1/reporting/transactions?start_date=2022-08-04T10:30:59Z&fields=all&end_date=2022-08-28T11:15:24.929Z`,
        headers: { 
            'Authorization': `Bearer ${await getBearerToken()}`
    }
    }
    console.log(conf);
    return conf;
}


async function fetchTransactions(req,res){

    //Create a Loop from lastfetchday untin current Time or more
    //while(currentdate - lastfetchday >= 30), 
    //pass information that "end date shall not be currentdate but rather lastfetchday + 30"
    //be aware of problems regarding february?!?!


    let transactions;
    const currentDate = new Date();
    console.log("CurrentDate:" + currentDate);
    
    let lastFetchDate = await getLastPPFetchDate();

    if(lastFetchDate == false){
        //create logic to ask user for start date
        //Prototype before implementing user entry
        console.log("First Fetch:");
        //get 1 month of transactions -> currentDate - 3cle0

        startDate = new Date(currentDate);
        startDate.setDate(startDate.getDate() - 30);
        console.log(startDate.Time)

        console.log("startDate:"+ startDate);
        console.log("endDate:" + currentDate);

        transactions = await axios(await conf(startDate, currentDate));
        await insertPPDatatoDB(transactions.data.transaction_details);
        
    }
    else{
        //we have already pulled transactions once
        console.log("Second Fetch:")

        let startDate = new Date(lastFetchDate);
        let endDate = new Date (lastFetchDate);

        //Check the time difference between lastFetchDate & CurrentDate - if < 30 No Loop necessery
        //But we want to make sure that no error due to lack of refreshdate

        if(dateDiffInDays(lastFetchDate, currentDate) < 30){
            
            endDate = currentDate;
            startDate.setDate(currentDate.getDate() - 30)
            transactions = await axios(await conf(startDate, endDate));
            //await insertPPDatatoDB(transactions.data.transaction_details);

        }
        else{

            //loop as long as currentDate > endDate
                do{
                    endDate.setDate(startDate.getDate() + 30 );

                    console.log("startDate:" + startDate);
                    console.log("endDate:" + endDate);

                    transactions = await axios(await conf(startDate, endDate));
                
                    startDate = endDate
                    //console.log(transactions.data);
                    //await insertPPDatatoDB(transactions.data.transaction_details);
                    }while(currentDate > endDate);
            }
        }
    //console.log(transactions.data.transaction_details);
    res.send(transactions.data.transaction_details);
    await logDate(currentDate);
};

async function insertPPDatatoDB(data) {

    for(let i = 0; i < data.length; i++){
        const currentTransaction = data[i];
        console.log(i + " " + currentTransaction)
        const curTransInfo = currentTransaction.transaction_info;

        if(await transaction.find({custom_id: curTransInfo.transaction_id})){
            //console.log(transaction.find({custom_id: curTransInfo.transaction_id}).exec())
            console.log("ID already found: " + curTransInfo.transaction_id);
            continue;
        }

        const newTrans = new transaction({
            custom_id: curTransInfo.transaction_id,
            date: curTransInfo.transaction_updated_date, 
            trans_amount: Math.abs(parseFloat((curTransInfo.transaction_amount.value))), 
            is_credit: checkCredit(curTransInfo.transaction_amount.value),
            payer_name: setName(currentTransaction.payer_info.payer_name.given_name, currentTransaction.payer_info.payer_name.surname),
            trans_note: ((curTransInfo.transaction_note == undefined) ? ('') : curTransInfo.transaction_note),
            trans_subj: ((curTransInfo.transaction_subject == undefined) ? ('') : curTransInfo.transaction_subject),
            trans_note_subj: setNoteSubj(curTransInfo.transaction_note, curTransInfo.transaction_subject),
            source: 'paypal'
            //category: tagTransaction(currentTransaction.transaction_note),
        })

        await newTrans.save()
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

}   

module.exports = fetchTransactions;