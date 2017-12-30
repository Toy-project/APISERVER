const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const error = require(path.join(__dirname, '../../helper/errorHandler'));

const router = express.Router();
const Category = require(path.join(__dirname, './category.model.js'));

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
    next(err);
  });
});

// create category
router.post('/', function(req, res, next) {
  console.log("Create a category");

  Category.findOrCreate({
    where: {
      cate_id: req.body.cate_id,
      cate_name: req.body.cate_name
    }
  })
  .spread((category, created) => {
    created ? res.status(201).json(category) : next(error(400));
  })
  .catch(err => {
    next(err);
  });
});

// delete category
router.delete('/:cate_id', function(req, res, next) {
  console.log("Remove a category");

  Category.findById(req.params.cate_id)
  .then(num => {
    // number (0 or 1)
    if(num) {
      Category.destroy({
        where: {
          cate_id: req.params.cate_id,
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

// update category
router.put('/:cate_id', function(req, res, next) {
  // update list
  let updateList = {
    cate_name: req.body.cate_name,
    //...
  };

  Category.findById(req.params.cate_id)
  .then(num => {
    // number (0 or 1)
    if(num) {
      Category.update(updateList, {
        where: {
          cate_id: req.params.cate_id,
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
