const express = require('express')
const router = express.Router();
const fetchTransactions = require('../controller/pp-transactions')
const {getBearerToken } = require('../controller/token');


router.get('/fetch', fetchTransactions);

module.exports = router;