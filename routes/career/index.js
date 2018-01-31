const express = require('express');

const router = express.Router();
const Controller = require('./career.controller.js');
const uploadHelper = require('../../helper/uploadHelper.js');

// get all career list
router.get('/', Controller.getAllCareer);

// get club career list
router.get('/club/:club_id', Controller.getAllClubByCareerId);

// get a specific career
router.get('/:career_id', Controller.getCareer);

// create career
router.post('/', Controller.createCareer);

// delete career
router.delete('/:career_id', Controller.deleteCareer);

// update career
router.put('/:career_id', Controller.updateCareer);

// update career photo
router.put('/photo/:career_id', uploadHelper.careerPhoto, Controller.updateCareerPhoto);

module.exports = router;
