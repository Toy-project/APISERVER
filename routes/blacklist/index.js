const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Controller = require(path.join(__dirname, './blacklist.controller'));

// get all blacklist list
router.get('/', Controller.getAllBlacklist);

// get blacklist
router.get('/:blacklist_id', Controller.getBlacklist);

// create blacklist
router.post('/', Controller.createBlacklist);

// delete blacklist
router.delete('/:blacklist_id', Controller.deleteBlacklist);

// update blacklist
router.put('/:blacklist_id', Controller.updateBlacklist);

module.exports = router;
