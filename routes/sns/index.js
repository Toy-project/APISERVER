const express = require('express');

const router = express.Router();
const Controller = require('./sns.controller.js');

// get all sns list
router.get('/', Controller.getAllSns);

// get a specific sns
router.get('/:sns_id', Controller.getSns);

// get club sns
router.get('/club/:club_id', Controller.getClubSns);

// create Sns table
router.post('/', Controller.createSns);

// delete Sns
router.delete('/:sns_id', Controller.deleteSns);

// delete Sns clubid
router.delete('/club/:club_id', Controller.deleteSnsByClubId);

// update Sns
router.put('/:sns_id', Controller.updateSns);

module.exports = router;
