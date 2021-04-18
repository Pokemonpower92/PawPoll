/* The model of polls to be stored in pawPollDB */
const mongoose = require('mongoose');


/* 
    Results will be stored in an array
    where each index i of the array corresponds to 
    index i of the answers array.
*/
const pollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answers: {
        type: [String],
        required: true
    },
    results: {
        type: [Number],
    },
    author: {
        type: String,
        default: "Anon"
    }
})

pollSchema.methods.initialize = function () {
    for(let i = 0; i < this.answers.length; i++){
        this.results.push(0);
    }
}

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;