const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Controller = require(path.join(__dirname, './career.controller.js'));

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