const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryTaggingSchema = new Schema({
    keyword: {
        type: String,
        require: true
    },
    category: {
        type: String, 
        require: false
    }
})

const BaseTag = mongoose.model('BaseTag', categoryTaggingSchema); 
const CustomTag = mongoose.model('CustomTag', categoryTaggingSchema);

const testTag = mongoose.model('TestTag', categoryTaggingSchema);


module.exports = {BaseTag, CustomTag, testTag};