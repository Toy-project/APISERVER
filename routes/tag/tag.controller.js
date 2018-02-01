const error = require('../../helper/errorHandler');
const Tag = require('./tag.model.js');

exports.getAllTag = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (results) => {
    res.status(200).json(results);
  };

  Tag.findAndCountAll({
    offset: req.params.start,
    limit: req.params.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getTag = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  Tag.findById(req.params.tag_id)
  .then(respond)
  .catch(onError);
};

exports.createTag = function (req, res, next) {
  const createList = {
    tag_id: req.body.tag_id,
    tag_name: req.body.tag_name,
    // ...
  };

  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    res.status(201).json(result);
  };

  Tag.create(createList)
  .then(respond)
  .catch(onError);
};

exports.deleteTag = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      Tag.destroy({
        where: {
          tag_id: req.params.tag_id,
        },
      })
      .then(() => {
        res.send(200);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  Tag.findById(req.params.tag_id)
  .then(respond)
  .catch(onError);
};

exports.updateTag = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      const updateList = {
        tag_name: req.body.tag_name || data.tag_name,
        // ...
      };

      Tag.update(updateList, {
        where: {
          tag_id: req.params.tag_id,
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

  Tag.findById(req.params.tag_id)
  .then(respond)
  .catch(onError);
};
