const express = require('express');

const router = express.Router();
const Controller = require('./site_statistic.controller.js');

// get Site_statistic list
router.get('/', Controller.getAllSiteStatistic);

// get a specific Site_statistic
router.get('/:date', Controller.getSiteStatistic);

// update a site_statistic
router.put('/:date', Controller.createOrUpdateSiteStatistic);

// delete a site_statistic
router.delete('/:date', Controller.deleteSiteStatistic);

module.exports = router;
