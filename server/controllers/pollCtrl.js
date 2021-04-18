/* CRUD APIS for polls */

const Poll = require('../models/poll');

createPoll = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: "No poll provided",
        })
    }

    const newPoll = new Poll(body);

    if(!newPoll){
        return res.status(400).json({
            success: false,
            error: err,
        })
    }

    newPoll
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: newPoll._id,
                message: "New poll created",
            })
        })
        .catch(err => {
            return res.status(400).json({
                success: false,
                message: "New poll not created",
            })
        })
}

updatePoll = async (req, res) => {
    const { id } = req.params;
    const body   = req.body;

    if(!id){
        return res.status(400).json({
            success: false,
            message: "No id provided",
        })
    }
    if(!body){
        return res.status(400).json({
            success: false,
            error: "No poll provided",
        })
    }

    const poll = await Poll.findOne(id);

    if(!poll){
        return res.status(404).json({
            success: false,
            message: "Invalid id",
        })
    }

    poll.question = body.question;
    poll.answers  = body.answers;
    poll.author   = body.author;
    poll.results  = body.results;

    poll
    .save()
    .then(() => {
        return res.status(201).json({
            success: true,
            id: newPoll._id,
            message: "New poll created",
        })
    })
    .catch(err => {
        return res.status(400).json({
            success: false,
            message: "New poll not created",
        })
    })
}

deletePoll = async (req, res) => {
    const { id } = req.params;

    if(!id){
        return res.status(400).json({
            success: false,
            message: "No id provided",
        })
    }

    const poll = await Poll.findOneAndDelete(id);

    if(!poll){
        return res.status(404).json({
            success: false,
            message: "Invalid id",
        })
    }

    return res.status(200).json({
        success: true,
        data: poll,
    })

}

getPollById = async (req, res) => {
    const { id } = req.params;

    if(!id){
        return res.status(400).json({
            success: false,
            message: "No id provided",
        })
    }

    const poll = await Poll.findById(id);

    if(!poll){
        return res.status(404).json({
            success: false,
            message: "Invalid id",
        })
    }

    return res.status(200).json({
        success: true,
        data: poll,
    })
}

getPolls = async (req, res) => {
    const polls = await Poll.find({});

    if(!polls){
        return res.status(404).json({
            success: false,
            message: "No polls found",
        })
    }

    return res.status(200).json({
        success: true,
        data: polls,
    })
}

module.exports = {
    createPoll,
    updatePoll,
    deletePoll,
    getPollById,
    getPolls, 
}