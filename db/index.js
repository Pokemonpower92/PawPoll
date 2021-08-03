require("dotenv").config()
const mongoose = require('mongoose');
const { send } = require('process');

const uri = process.env.MONGOBD_URL

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION ESTABLISHED TO PAWPOLLDB");
    })
    .catch(err => {
        console.log("ERROR CONNECTING TO PAWPOLLDB");
        console.log(err);
    })

const db = mongoose.connection;

module.exports = db;