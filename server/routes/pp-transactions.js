//Import express and make use of router functionality
const express = require('express');
const router = express.Router();

const fetchTransactions = require('../controller/pp-transactions')

//If user performs GET Request at URL: .../paypal/fetch
//run the fetchTransactions function, located in the controller directory
router.get('/fetch', fetchTransactions);

module.exports = router;