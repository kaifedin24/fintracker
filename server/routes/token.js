const express = require('express')
const router = express.Router()

const {getBearerToken,getBearerToken2, tokenTest} = require('../controller/token')


router.get('/', getBearerToken2);
//router.get('/test', tokenTest);


module.exports = router;
