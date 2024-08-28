var express = require('express');
var multer = require('multer');

var app = express();

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './Upload'); // Directory where the file will be saved
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname); // File name to save as
    }
});

var upload = multer({ storage: storage }).single('myfile');

app.post('/', function (req, res) {
    upload(req, res, function (error) {
        if (error) {
            res.send("File upload failed!");
        } else {
            res.send("File upload success!");
        }
    });
});

app.listen(8000, function () {
    console.log("Server running successfully on port 8000");
});
