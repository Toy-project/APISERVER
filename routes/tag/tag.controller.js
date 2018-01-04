const error = require('../../helper/errorHandler');
const Tag = require('./tag.model.js');

exports.getAllTag = function (req, res, next) {
  const respond = (results) => {
    res.status(200).json(results);
  };

  const onError = (err) => {
    next(err);
  };

  Tag.findAll()
  .then(respond)
  .catch(onError);
};

exports.getTag = function (req, res, next) {
  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Tag.findOne({
    where: {
      tag_id: req.params.tag_id,
    },
  })
  .then(respond)
  .catch(onError);
};

exports.createTag = function (req, res, next) {
  const createList = {
    tag_id: req.body.tag_id,
    tag_name: req.body.tag_name,
    // ...
  };

  const respond = (tag, created) => {
    created ? res.status(201).json(tag) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Tag.findOrCreate({
    where: createList,
  })
  .spread(respond)
  .catch(onError);
};

exports.deleteTag = function (req, res, next) {
  const respond = (num) => {
    // number (0 or 1)
    if (num) {
      Tag.destroy({
        where: {
          tag_id: req.params.tag_id,
        },
      })
      .then(() => {
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

  Tag.findById(req.params.tag_id)
  .then(respond)
  .catch(onError);
};

exports.updateTag = function (req, res, next) {
  const updateList = {
    tag_name: req.body.tag_name,
    // ...
  };

  const respond = (num) => {
    // number (0 or 1)
    if (num) {
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

  Tag.findById(req.params.tag_id)
  .then(respond)
  .catch(onError);
};
