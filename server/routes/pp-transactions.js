const express = require('express')
const router = express.Router();
const fetchTransactions = require('../controller/pp-transactions')


router.get('/fetch', fetchTransactions);

module.exports = router;