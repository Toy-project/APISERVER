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
    offset: +req.params.start || +req.query.start,
    limit: +req.params.end || +req.query.end,
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
        res.status(200).send(true);
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
      const dataObj = JSON.parse(JSON.stringify(data));
      const updateList = Object.assign(dataObj, JSON.parse(JSON.stringify(req.body)));

      Tag.update(updateList, {
        where: {
          tag_id: req.params.tag_id,
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

  Tag.findById(req.params.tag_id)
  .then(respond)
  .catch(onError);
};
