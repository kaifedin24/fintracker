//Express App Initialization
const express = require('express')
const app = express()

//MongoDB Initial
const mongo = require('mongodb').MongoClient
const mongoose = require('mongoose');

//Express Router Routes
const pp = require('./routes/pp-transactions')
const upload = require('./routes/uploadRoute')

//Misc
require('dotenv').config();

//Connect to DB & Start Server
console.log('Trying to start the server')
const dbURL = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPW}@cluster0.q3ylm.mongodb.net/fintracker?retryWrites=true&w=majority`
mongoose.connect(dbURL)
.then((result) => {
    console.log('connected to db');
    app.listen(4000, ()=>{
        console.log('server is up and running on port 4000')
    })
})
.catch((err) => console.log(err));

//This is necessary to make the upload POST-requests
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Route for the upload handling (Maybe unnecessary tbh)
app.use('/upload', upload);