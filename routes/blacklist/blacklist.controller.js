const error = require('../../helper/errorHandler');
const Blacklist = require('./blacklist.model.js');

exports.getAllBlacklist = function (req, res, next) {
  const respond = (results) => {
    res.status(200).json(results);
  };

  const onError = (err) => {
    next(err);
  };

  Blacklist.findAndCountAll({
    offset: req.params.start,
    limit: req.params.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getBlacklist = function (req, res, next) {
  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Blacklist.findOne({
    where: {
      mem_id: req.params.mem_id,
    },
  })
  .then(respond)
  .catch(onError);
};

exports.createBlacklist = function (req, res, next) {
  const createList = {
    mem_id: req.body.mem_id,
    black_type: req.body.black_type,
    // ...
  };

  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Blacklist.create(createList)
  .then(respond)
  .catch(onError);
};

exports.deleteBlacklist = function (req, res, next) {
  const respond = (data) => {
    if (data) {
      Blacklist.destroy({
        where: {
          mem_id: req.params.mem_id,
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

  Blacklist.findById(req.params.mem_id)
  .then(respond)
  .catch(onError);
};

exports.updateBlacklist = function (req, res, next) {
  const updateList = {
    black_type: req.body.black_type,
    // ...
  };

  const respond = (data) => {
    if (data) {
      Blacklist.update(updateList, {
        where: {
          mem_id: req.params.mem_id,
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

  Blacklist.findById(req.params.mem_id)
  .then(respond)
  .catch(onError);
};
