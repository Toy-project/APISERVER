const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Tag = require(path.join(__dirname, './tag.model.js'));

// get all tag list
router.get('/', function(req, res, next) {
  console.log("get all tag list");
  Tag.findAll({
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

// get tag
router.get('/:tag_id', function(req, res, next) {
  console.log("get a specific tag");
  Club.find({
    where: {
        tag_id: req.params.tag_id,
    },
  })
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  });
});

// create tag
router.post('/', function(req, res, next) {
  console.log("Create a tag");

  Category.create({
    tag_id: req.body.tag_id,
    tag_name: req.body.tag_name
    //...
  })
  .then(result => {
    res.status(201).json(result);
  })
  .catch(err => {
    res.send(err);
  });
});

// delete tag
router.delete('/:tag_id', function(req, res, next) {
  console.log("Remove a tag");
  Tag.destroy({
    where: {
        tag_id: req.params.tag_id,
    }
  })
  .then(result => {
    res.send(201);
  })
  .catch(err => {
    res.send(err);
  });
});

// update tag
router.put('/:tag_id', function(req, res, next) {
  // update list
  let updateList = {
    tag_id: req.body.tag_id,
    tag_name: req.body.tag_name
    //...
  };

  Tag.update(updateList, {
    where: {
      tag_id: req.params.tag_id,
    }
  })
  .then(result => {
    res.status(201).json(result);
  });
});

module.exports = router;
