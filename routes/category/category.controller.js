const error = require('../../helper/errorHandler');

const Category = require('./category.model');

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
        res.status(200).send(true);
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
      const dataObj = JSON.parse(JSON.stringify(data));
      const updateList = Object.assign(dataObj, JSON.parse(JSON.stringify(req.body)));

      Category.update(updateList, {
        where: {
          cate_id: req.params.cate_id,
        },
      })
      .then(() => {
        res.status(201).json(updateList);
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
