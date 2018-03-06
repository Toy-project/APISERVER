const error = require('../../helper/errorHandler');

const Blacklist = require('./blacklist.model');

exports.getAllBlacklist = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (results) => {
    res.status(200).json(results);
  };

  Blacklist.findAndCountAll({
    offset: +req.params.start || +req.query.start,
    limit: +req.params.end || +req.query.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getBlacklist = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
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

  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  Blacklist.create(createList)
  .then(respond)
  .catch(onError);
};

exports.deleteBlacklist = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      Blacklist.destroy({
        where: {
          mem_id: req.params.mem_id,
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

  Blacklist.findById(req.params.mem_id)
  .then(respond)
  .catch(onError);
};

exports.updateBlacklist = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      const dataObj = JSON.parse(JSON.stringify(data));
      const updateList = Object.assign(dataObj, JSON.parse(JSON.stringify(req.body)));

      Blacklist.update(updateList, {
        where: {
          mem_id: req.params.mem_id,
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

  Blacklist.findById(req.params.mem_id)
  .then(respond)
  .catch(onError);
};
