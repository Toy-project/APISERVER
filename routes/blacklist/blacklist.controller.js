const error = require('../../helper/errorHandler');
const Blacklist = require('./blacklist.model.js');

exports.getAllBlacklist = function (req, res, next) {
  const respond = (results) => {
    res.status(200).json(results);
  };

  const onError = (err) => {
    next(err);
  };

  Blacklist.findAll()
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

  const respond = (blacklist, created) => {
    created ? res.status(201).json(blacklist) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Blacklist.findOrCreate({
    where: createList,
  })
  .spread(respond)
  .catch(onError);
};

exports.deleteCategory = function (req, res, next) {
  const respond = (num) => {
    // number (0 or 1)
    if (num) {
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

exports.updateCategory = function (req, res, next) {
  const updateList = {
    black_type: req.body.black_type,
    // ...
  };

  const respond = (num) => {
    // number (0 or 1)
    if (num) {
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
