const express = require('express');
const path = require('path');

const router = express.Router();
const Controller = require(path.join(__dirname, './Site_statistic.controller.js'));

// get Site_statistic list
router.get('/', Controller.GetAllSite_statistic);

//get a specific Site_statistic
router.get('/:date', Controller.GetSite_statistic);

//create a site_statistic
router.post('/', Controller.createSite_statistic);

//update a site_statistic
router.put('/:date', Controller.updateSite_statistic);

router.delete('/:date', Controller.removeSite_statistic);

module.exports = router;
