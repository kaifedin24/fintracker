//Express App Initialization
const express = require('express')
const app = express()

const mongo = require('mongodb').MongoClient
const mongoose = require('mongoose');
const pp = require('./routes/pp-transactions');
const {getLastPPFetchDate, currentDateISO8601, dateDiffInDays} = require('./functions/date');
const { getSandBoxBearerToken } = require('./controller/token');
require('dotenv').config();

const logDate = require('./functions/logging');


console.log('Trying to start the server')

//Connecto to DB & Start Server
const dbURL = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPW}@cluster0.q3ylm.mongodb.net/fintracker?retryWrites=true&w=majority`

mongoose.connect(dbURL)
.then((result) => {
    console.log('connected to db');
    app.listen(4000, ()=>{
        console.log('server is up and running on port 4000');
    })
})
.catch((err) => console.log(err));


app.use('/paypal', pp);