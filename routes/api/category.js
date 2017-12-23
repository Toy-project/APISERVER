const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Category = require(path.join(__dirname, '../model/category.js'));

const app = express();

// get all category list
router.get('/', function(req, res, next) {
  console.log("get all category list");
  Category.findAll({
    where: {
      // todo
    },
  })
  .then(results => {
    res.status(200).json(results);
  })
  .catch(err => {
    res.send(err);
  });
});

//get all category name list
router.get('/:nm', function(req, res, next) {
  console.log("get all category name list");
  Category.findAll({
    attributes: ['cate_nm']
  })
  .then(results => {
    res.status(200).json(results);
  })
  .catch(err => {
    res.send(err);
  });
});

// get category
router.get('/:cate_id', function(req, res, next) {
  console.log("get a specific club");
  Club.find({
    where: {
        cate_id: req.params.cate_id,
    },
  })
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  });
});

// create category
router.post('/', function(req, res, next) {
  console.log("Create a club");

  Category.create({
    cate_id: req.body.cate_id,
    cate_nm: req.body.cate_nm
    //...
  })
  .then(result => {
    res.status(201).json(result);
  })
  .catch(err => {
    res.send(err);
  });
});

// delete category
router.delete('/:cate_id', function(req, res, next) {
  console.log("Remove a user");
  Category.destroy({
    where: {
      cate_id: req.params.cate_id,
    }
  })
  .then(result => {
    res.send(201);
  })
  .catch(err => {
    res.send(err);
  });
});

// update category
router.put('/:id', function(req, res, next) {
  // update list
  let updateList = {
    cate_id: req.body.cate_id,
    cate_nm: req.body.cate_nm
    //...
  };

  Category.update(updateList, {
    where: {
      cate_id: req.params.cate_id,
    }
  })
  .then(result => {
    res.status(201).json(result);
  });
});

module.exports = router;
