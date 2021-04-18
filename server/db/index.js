const mongoose = require('mongoose');
const { send } = require('process');
mongoose.connect('mongodb://localhost:27017/pawPollDB', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION ESTABLISHED TO PAWPOLLDB");
    })
    .catch(err => {
        console.log("ERROR CONNECTING TO PAWPOLLDB");
        console.log(err);
    })

const db = mongoose.connection;

module.exports = db;