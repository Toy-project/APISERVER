const error = require('../../helper/errorHandler');
const Category = require('./category.model.js');

exports.getAllCategory = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (results) => {
    res.status(200).json(results);
  };

  Category.findAndCountAll({
    offset: +req.params.start || +req.query.start,
    limit: +req.params.end || +req.query.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getCategory = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
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

  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    res.status(201).json(result);
  };

  Category.create(createList)
  .then(respond)
  .catch(onError);
};

exports.deleteCategory = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      Category.destroy({
        where: {
          cate_id: req.params.cate_id,
        },
      })
      .then((result) => {
        res.send(200);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  Category.findById(req.params.cate_id)
  .then(respond)
  .catch(onError);
};

exports.updateCategory = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      const updateList = {
        cate_name: req.body.cate_name || data.cate_name,
        // ...
      };

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
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  Category.findById(req.params.cate_id)
  .then(respond)
  .catch(onError);
};
