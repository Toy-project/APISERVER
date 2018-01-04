const express = require('express');

const router = express.Router();
const Controller = require('./tag.controller.js');

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
