const csv_upload = (req, res) => {
    console.log(req.file);
    console.log('Stuff works here as well!');
    res.status(201).send('It worked');
}

module.exports = csv_upload;