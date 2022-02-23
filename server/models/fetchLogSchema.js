const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fetchLogSchema = {
    source: {
        type: String,
        require: true
    },
    timeISO: {
        type: String, 
        require: true
    }
}

const fetchLog = mongoose.model('fetchlog', fetchLogSchema);

module.exports = fetchLog;