const express = require('express')
const app = express()
const mongo = require('mongodb').MongoClient
const mongoose = require('mongoose');
const axios = require('axios')
//const token = require('./routes/token');
const pp = require('./routes/pp-transactions')
require('dotenv').config();


//const Trans = require('./models/transactions')
//const Test = require('./models/test')
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


//Get Bearer Token
//app.use('/token', token); 
/*app.get('/', (req,res) =>{
    res.status(400).send('<h1> HOME </h1>');
})*/

// app.use('/paypal', pp);
app.post('/upload', (req, res) => {
    res.send('POST');
});
// app.get('/upload', function (req, res) {
//     res.send('GET to upload page')
// });


