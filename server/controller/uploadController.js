const csv_upload = (req, res) => {
    console.log(req.body);
    res.status(201).send('It worked');
}

module.exports = csv_upload;