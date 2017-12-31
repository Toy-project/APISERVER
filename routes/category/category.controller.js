const path = require('path');
const error = require(path.join(__dirname, '../../helper/errorHandler'));

const Category = require(path.join(__dirname, './category.model.js'));

exports.getAllCategory = function(req, res, next) {
  console.log("get all category list");

  const respond = results => {
    res.status(200).json(results);
  };

  const onError = err => {
    next(err);
  };
  
  Category.findAll()
  .then(respond)
  .catch(onError);
};

exports.getCategory = function(req, res, next) {
  console.log("get a specific category");

  const respond = result => {
    result ? res.status(200).json(result) : next(error(400));
  };

  const onError = err => {
    next(err);
  };

  Category.findOne({
    where: {
      cate_id: req.params.cate_id,
    },
  })
  .then(respond)
  .catch(onError);
};

exports.createCategory = function(req, res, next) {
  console.log("Create a category");

  const createList = {
    cate_id,
    cate_name
    //...
  } = req.body;

  const respond = (category, created) => {
    created ? res.status(201).json(category) : next(error(400));
  };

  const onError = err => {
    next(err);
  };

  Category.findOrCreate({
    where: createList
  })
  .spread(respond)
  .catch(onError);
};

exports.deleteCategory = function(req, res, next) {
  console.log("Remove a category");

  const respond = num => {
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
  };

  const onError = err => {
    next(err);
  };

  Category.findById(req.params.cate_id)
  .then(respond)
  .catch(onError);
};

exports.updateCategory = function(req, res, next) {
  console.log("Update a category");

  const updateList = {
    cate_name,
    //...
  } = req.body;

  const respond = num => {
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
  };

  const onError = err => {
    next(err);
  };

  Category.findById(req.params.cate_id)
  .then(respond)
  .catch(onError);
};
