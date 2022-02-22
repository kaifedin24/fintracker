const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//.Schema is a Constructor Function

//Create a new Schema with properties
const transSchema = new Schema({

    transNote: {
        type: String,
        required: true
    },
    transAmount: {
        type: Number,
        require: true
    } 

});



//Schema is just the Structure
//The Model wraps the Schema and provides an interface, which lets us communicate with the properties...

//Create a Model based on the described Schema above
//The first Argument passed in, is the singular Version of the 
//Collection we have created on MongoDB, in our case 'Transactions'
// Now Mongoose knows where in the future to search for Transaction Models -> in Transactions Document
const Trans = mongoose.model('Transaction', transSchema); 

module.exports = Trans;