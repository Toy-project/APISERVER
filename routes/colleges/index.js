const express = require('express');

const router = express.Router();
const Controller = require('./colleges.controller.js');

// get a sepecific comment with club_id
router.get('/', Controller.getColleges());

module.exports = router;
