const csvFilePath = '../uploads/20220218-700490550-umsatz.CSV';
const csv = require('csvtojson');
const converter = csv({
    delimiter: ";"
})
.fromFile(csvFilePath)
.then((jsonObj) => {
    console.log(jsonObj);
});