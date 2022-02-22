const axios = require('axios');
require('dotenv').config();


const fetchTransUrl = "https://api-m.sandbox.paypal.com/v1/reporting/transactions?start_date=2022-02-17T00:00:00-0100&fields=all&end_date=2022-02-20T19:00:00-0100";

/*function fetchTransUrlParams() {

    return `?`
}*/

//"?start_date=2022-02-17T00:00:00-0100&fields=all&end_date=2022-02-20T19:00:00-0100"


const fetchTransConfig = {
    headers:{
        Authorization: `Bearer ${process.env.TOKEN}`
        //Authorization: 'Bearer A21AAJRuq9PnzqmoMplbmQ7J26cDSSbXH0wDFH75tmERdf7AvTW1XwPh2gke-7xB0SpebL-ifjRuqvfqOM6rgKFwyYVReCRfA'
    }
}



const fetchTransactions = (req,res) => {

    axios.get(fetchTransUrl, fetchTransConfig )
        .then((response) => {
            const data = response.data;
            res.send(data);
        })
        .catch()
    
};


module.exports = fetchTransactions;