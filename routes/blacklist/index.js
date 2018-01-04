const express = require('express');

const router = express.Router();
const Controller = require('./blacklist.controller');

// get all blacklist list
router.get('/', Controller.getAllBlacklist);

// get blacklist
router.get('/:mem_id', Controller.getBlacklist);

// create blacklist
router.post('/', Controller.createBlacklist);

// delete blacklist
router.delete('/:mem_id', Controller.deleteBlacklist);

// update blacklist
router.put('/:mem_id', Controller.updateBlacklist);

module.exports = router;
