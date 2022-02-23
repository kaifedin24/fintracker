const express = require('express')
const app = express()
const mongo = require('mongodb').MongoClient
const mongoose = require('mongoose');
const axios = require('axios')
const pp = require('./routes/pp-transactions')
const currentDateISO8601 = require('./functions/date')
require('dotenv').config();


console.log('Trying to start the server')

//Connecto to DB & Start Server
const dbURL = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPW}@cluster0.q3ylm.mongodb.net/fintracker?retryWrites=true&w=majority`
mongoose.connect(dbURL)
.then((result) => {
    console.log('connected to db');
    app.listen(4000, ()=>{
        console.log('server is up and running on port 4000')
    })
})
.catch((err) => console.log(err));


app.use('/paypal', pp);




