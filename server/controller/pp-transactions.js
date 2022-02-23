require('dotenv').config();
const axios = require('axios');
const currentDateISO8601 = require('../functions/date');
const transaction = require('../models/transactionSchema');
const fetchLog = require('../models/fetchLogSchema');
const {checkCredit, setName, setNoteSubj} = require('../functions/parse_transactions')


const fetchTransUrlBase = "https://api-m.sandbox.paypal.com/v1/reporting/transactions";

//this date should be dynamically be adapted
const TransStartDatePlaceholder = '2022-02-17T00:00:00-0100';

function getLastFetchDate (){

}

function fetchTransUrlParams() {
    //Get Last fetched PP TIME for Start Date

    return `?start_date=${TransStartDatePlaceholder}&end_date=${currentDateISO8601()}&fields=all`
}
function fetchTransUrl() {
    return fetchTransUrlBase + fetchTransUrlParams();
}
function fetchTransConfig() {

    return {
        headers:{
            Authorization: `Bearer ${process.env.TOKEN}`
        }
    }
}

const fetchTransactions = (req,res) => {
    axios.get(fetchTransUrl(), fetchTransConfig() )
        .then((response) => {
            const data = response.data;
            insertPPDatatoDB(data.transaction_details);

            const curFetch = new fetchLog({
                source: 'paypal',
                timeISO: currentDateISO8601()
            })

            curFetch.save()
                .then((result) => console.log(result))
                .catch(error => console.log(error))

            res.send(response.data.transaction_details);
        })
        .catch((error) => {res.status(500).send(error)})
};

function insertPPDatatoDB(data) {

    for(let i = 0; i < data.length; i++){
        const currentTransaction = data[i];
        const curTransInfo = currentTransaction.transaction_info;

        if(transaction.find({custom_id: curTransInfo.transaction_id})){
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

        newTrans.save()
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

}


module.exports = fetchTransactions;