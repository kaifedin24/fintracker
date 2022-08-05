const express = require('express');
const router = express.Router();
const csv_upload = require('../controller/uploadController');

//Multer for Server-Side File handling
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        console.log(file)
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});

router.post('/', upload.single('csvFile'), csv_upload);

module.exports = router;