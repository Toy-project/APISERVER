const express = require('express');
const path = require('path');

const router = express.Router();
const Controller = require(path.join(__dirname, './site_statistic.controller.js'));

// get Site_statistic list
router.get('/', Controller.getAllSite_statistic);

//get a specific Site_statistic
router.get('/:date', Controller.getSite_statistic);

//update a site_statistic
router.put('/:date', Controller.createOrUpdateSite_statistic);

router.delete('/:date', Controller.deleteSite_statistic);

module.exports = router;
