const csv_upload = (req, res) => {
    // console.log(req.body.data.csvFile._parts[0][1]);
    console.log('Stuff works here as well!');
    res.status(201).send('It worked');
}

module.exports = csv_upload;