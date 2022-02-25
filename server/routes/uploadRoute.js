const express = require('express');
const router = express.Router();
const csv_upload = require('../controller/uploadController');


router.post('/', csv_upload);
router.get('/', (req, res) => {
    res.send("Yep this works");
})

module.exports = router;