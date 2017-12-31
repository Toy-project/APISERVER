const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const error = require(path.join(__dirname, '../../helper/errorHandler'));

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
    next(err);
  });
});

// get tag
router.get('/:tag_id', function(req, res, next) {
  console.log("get a specific tag");

  Tag.findOne({
    where: {
      tag_id: req.params.tag_id,
    },
  })
  .then(result => {
    result ? res.status(200).json(result) : next(error(400));
  })
  .catch(err => {
    next(err);
  });
});

// create tag
router.post('/', function(req, res, next) {
  console.log("Create a tag");

  Tag.findOrCreate({
    where: {
      tag_id: req.body.tag_id,
      tag_name: req.body.tag_name
      //...
    }
  })
  .spread((tag, created) => {
    created ? res.status(201).json(tag) : next(error(400));
  })
  .catch(err => {
    next(err);
  });
});

// delete tag
router.delete('/:tag_id', function(req, res, next) {
  console.log("Remove a tag");
  
  Tag.findById(req.params.tag_id)
  .then(num => {
    // number (0 or 1)
    if(num) {
      Tag.destroy({
        where: {
          tag_id: req.params.tag_id,
        }
      })
      .then(result => {
        res.send(200);
      })
      .catch(err => {
        next(err);
      });
    }
    else {
      next(error(400));
    }
  })
  .catch(err => {
    next(err);
  });
});

// update tag
router.put('/:tag_id', function(req, res, next) {
  // update list
  let updateList = {
    tag_name: req.body.tag_name
    //...
  };

  Tag.findById(req.params.tag_id)
  .then(num => {
    // number (0 or 1)
    if(num) {
      Tag.update(updateList, {
        where: {
          tag_id: req.params.tag_id,
        }
      })
      .then(result => {
        // result is number (o or 1)
        // 0: 기존 데이터와 동일
        // 1: 기존 데이터와 달라 업데이트 성공
        res.status(201).send(result);
      })
      .catch(err => {
        next(err);
      }); 
    }
    else {
      next(error(400));
    }
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;
