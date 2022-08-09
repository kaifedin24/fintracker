const mongoose = require('mongoose');
const { model } = require('mongoose');
const Schema = mongoose.Schema;

const fetchLogSchema = {
    source: {
        type: String,
        require: true
    },
    timeISO: {
        type: Object, 
        require: true
    }
}

const fetchLog = mongoose.model('fetchlog', fetchLogSchema);

module.exports = fetchLog;