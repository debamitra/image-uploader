const express = require('express');

const fs = require('fs');

const app = express();

var cors = require('cors');

const path = require('path');

app.use(cors())

const http = require('http');

const multer = require('multer')

app.use(express.static(__dirname));

const buildPath = path.join(__dirname, '..', 'build');

app.use(express.static(buildPath));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage }).single('file')


app.post('/upload',  (req, res) => {
    //console.log("req:", req);
    upload(req, res, (err) => {
        if (err) {
            console.log("err:", err);
            res.sendStatus(500);
        }
        res.send(req.file);
    });
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})