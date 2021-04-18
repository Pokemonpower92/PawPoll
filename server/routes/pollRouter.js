const express  = require('express');
const pollCtrl = require('../controllers/pollCtrl');
const router   = express.Router();


router.get('/polls', pollCtrl.getPolls);
router.get('/polls/:id', pollCtrl.getPollById);
router.post('/polls/', pollCtrl.createPoll);
router.put('/polls/:id', pollCtrl.updatePoll);
router.delete('/polls/:id', pollCtrl.deletePoll);

module.exports = router;