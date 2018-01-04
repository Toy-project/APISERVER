const error = require('../../helper/errorHandler');
const Category = require('./category.model.js');

exports.getAllCategory = function (req, res, next) {
  const respond = (results) => {
    res.status(200).json(results);
  };

  const onError = (err) => {
    next(err);
  };

  Category.findAll()
  .then(respond)
  .catch(onError);
};

exports.getCategory = function (req, res, next) {
  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  const onError = (err) => {
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

exports.createCategory = function (req, res, next) {
  const createList = {
    cate_id: req.body.cate_id,
    cate_name: req.body.cate_name,
    // ...
  };

  const respond = (category, created) => {
    created ? res.status(201).json(category) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Category.findOrCreate({
    where: createList,
  })
  .spread(respond)
  .catch(onError);
};

exports.deleteCategory = function (req, res, next) {
  const respond = (num) => {
    // number (0 or 1)
    if (num) {
      Category.destroy({
        where: {
          cate_id: req.params.cate_id,
        },
      })
      .then((result) => {
        res.send(200);
      })
      .catch((err) => {
        next(err);
      });
    } else {
      next(error(400));
    }
  };

  const onError = (err) => {
    next(err);
  };

  Category.findById(req.params.cate_id)
  .then(respond)
  .catch(onError);
};

exports.updateCategory = function (req, res, next) {
  const updateList = {
    cate_name: req.body.cate_name,
    // ...
  };

  const respond = (num) => {
    // number (0 or 1)
    if (num) {
      Category.update(updateList, {
        where: {
          cate_id: req.params.cate_id,
        },
      })
      .then((result) => {
        // result is number (o or 1)
        // 0: 기존 데이터와 동일
        // 1: 기존 데이터와 달라 업데이트 성공
        res.status(201).send(result);
      })
      .catch((err) => {
        next(err);
      });
    } else {
      next(error(400));
    }
  };

  const onError = (err) => {
    next(err);
  };

  Category.findById(req.params.cate_id)
  .then(respond)
  .catch(onError);
};
