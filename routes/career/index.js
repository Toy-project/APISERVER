const express = require('express');

const router = express.Router();
const Controller = require('./career.controller.js');

// get all career list
router.get('/', Controller.getAllCareer);

// get a specific career
router.get('/:career_id', Controller.getCareer);

// create career
router.post('/', Controller.createCareer);

// delete career
router.delete('/:career_id', Controller.deleteCareer);

// update career
router.put('/:career_id', Controller.updateCareer);

module.exports = router;
