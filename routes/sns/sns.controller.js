const error = require('../../helper/errorHandler');
const Sns = require('./sns.model.js');

exports.getAllSns = function (req, res, next) {
  const respond = (results) => {
    res.status(200).json(results);
  };

  const onError = (err) => {
    res.send(err);
  };

  Sns.findAndCountAll({
    offset: req.params.start,
    limit: req.params.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getSns = function (req, res, next) {
  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  const onError = (err) => {
    res.send(err);
  };

  Sns.findById(req.params.sns_id)
  .then(respond)
  .catch(onError);
};

exports.getClubSns = function (req, res, next) {
  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  };

  const onError = (err) => {
    res.send(err);
  };

  Sns.findAndCountAll({
    where: {
      club_id: req.params.club_id,
    },
  })
  .then(respond)
  .catch(onError);
};

exports.createSns = function (req, res, next) {
  const createList = {
    sns_name: req.body.sns_name,
    sns_url: req.body.sns_url,
    club_id: req.body.club_id,
    // ...
  };

  const respond = (result) => {
    res.status(201).json(result);
  };

  const onError = (err) => {
    next(err);
  };

  Sns.create(createList)
  .then(respond)
  .catch(onError);
};

exports.deleteSns = function (req, res, next) {
  const respond = (data) => {
    if (data) {
      Sns.destroy({
        where: {
          sns_id: req.params.sns_id,
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

  Sns.findById(req.params.sns_id)
  .then(respond)
  .catch(onError);
};

exports.updateSns = function (req, res, next) {
  const respond = (data) => {
    if (data) {
      const updateList = {
        sns_name: req.body.sns_name || data.sns_name,
        sns_url: req.body.sns_url || data.sns_url,
        // ...
      };

      Sns.update(updateList, {
        where: {
          sns_id: req.params.sns_id,
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

  Sns.findById(req.params.sns_id)
  .then(respond)
  .catch(onError);
};
