const express = require('express');

const router = express.Router();
const Controller = require('./club.controller');

// get all club list
router.get('/', Controller.getAllClub);

// get a specific club
router.get('/:club_id', Controller.getClub);

// get club id
router.get('/userid/:userid', Controller.getClubUserId);

// get club email
router.get('/email/:email', Controller.getClubEmail);

// get club name
router.get('/name/:name', Controller.getClubName);

// get club search list
router.get('/search/:keyword', Controller.getClubSearch);

// get club category list
router.get('/category/:cate_id', Controller.getClubCategory);

// create club
router.post('/', Controller.createClub);

// delete club
router.delete('/:club_id', Controller.deleteClub);

// update club
router.put('/:club_id', Controller.updateClub);

// update club views
router.put('/views/:club_id', Controller.updateClubViews);

// update club visual
router.put('/visual/:club_id', Controller.updateClubPhoto);

module.exports = router;
