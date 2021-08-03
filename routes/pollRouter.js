const express  = require('express');
const pollCtrl = require('../controllers/pollCtrl');
const router   = express.Router();


router.get('/polls', pollCtrl.getPolls);
router.get('/poll/:id', pollCtrl.getPollById);
router.post('/poll/', pollCtrl.createPoll);
router.put('/poll/:id', pollCtrl.updatePoll);
router.delete('/poll/:id', pollCtrl.deletePoll);

module.exports = router;