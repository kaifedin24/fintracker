const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create a new Schema with properties
const transactionSchema = new Schema({

    custom_id:{
        type: String,
        require: true
    },
    date:{
        type: Object,
        require: true
    },
    trans_amount: {
        type: Number,
        require: true
    },
    is_credit:{
        type:Boolean,
        require: true
    },
    payer_name:{
        type: String,
        require: false
    },
    trans_note: {
        type: String,
        require: false
    },
    trans_subj: {
        type: String,
        require: false
    },
    trans_note_subj: {
        type: String,
        require: true
    },
    category:{
        type: String,
        require: false
    },
    source:{
        type: String, 
        require:true
    }
});


const transaction = mongoose.model('transaction', transactionSchema); 

module.exports = transaction;