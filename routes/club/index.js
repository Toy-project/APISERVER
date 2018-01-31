const express = require('express');

const router = express.Router();
const Controller = require('./club.controller.js');
const uploadHelper = require('../../helper/uploadHelper.js');

// get all club list
router.get('/', Controller.getAllClub);

// get a specific club
router.get('/:club_id', Controller.getClub);

// get search result club list
// ..

// create club
router.post('/', Controller.createClub);

// delete club
router.delete('/:club_id', Controller.deleteClub);

// update club
router.put('/:club_id', Controller.updateClub);

// update club views
router.put('/views/:club_id', Controller.updateClubViews);

// update club profile
router.put('/profile/:club_id', uploadHelper.clubProfile, Controller.updateClubProfile);

module.exports = router;
