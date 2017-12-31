const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Controller = require(path.join(__dirname, './tag.controller.js'));

// get all tag list
router.get('/', Controller.getAllTag);

// get tag
router.get('/:tag_id', Controller.getTag);

// create tag
router.post('/', Controller.createTag);

// delete tag
router.delete('/:tag_id', Controller.deleteTag);

// update tag
router.put('/:tag_id', Controller.updateTag);

module.exports = router;
