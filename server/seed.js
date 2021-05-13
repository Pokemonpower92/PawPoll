const Poll = require('./models/poll');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pawPollDB', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION ESTABLISHED TO PAWPOLLDB");
    })
    .catch(err => {
        console.log("ERROR CONNECTING TO PAWPOLLDB");
        console.log(err);
    })

const seed = new Poll({
    question: "This is a seed poll",
    answers: [
        "Seed",
        "Seed",
        "Seed",
        "Seed"
    ]
})

seed.addResults();

seed.save()
    .then( ret => {
        console.log(ret);
    })
    .catch( err => {
        console.log(err);
    })