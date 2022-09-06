//Express App Initialization
const express = require('express')
const app = express()

//Required lines of code to connect to the database
const mongoose = require('mongoose');
require('dotenv').config();

const pp = require('./routes/pp-transactions');


//Connecto to DB & Start Server
console.log('Trying to start the server')
const dbURL = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPW}@cluster0.q3ylm.mongodb.net/fintracker?retryWrites=true&w=majority`

mongoose.connect(dbURL)
.then(() => {
    console.log('connected to db');
    app.listen(4000, ()=>{
        console.log('server is up and running on port 4000');
    })
})
.catch((err) => console.log(err));


app.use('/paypal', pp);