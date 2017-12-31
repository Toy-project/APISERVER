const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Controller = require(path.join(__dirname, './category.controller.js'));

// get all category list
router.get('/', Controller.getAllCategory);

// get category
router.get('/:cate_id', Controller.getCategory);

// create category
router.post('/', Controller.createCategory);

// delete category
router.delete('/:cate_id', Controller.deleteCategory);

// update category
router.put('/:cate_id', Controller.updateCategory);

module.exports = router;
