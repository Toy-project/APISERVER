const error = require('../../helper/errorHandler');
const Session = require('./session.model.js');

exports.getAllSession = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (results) => {
    res.status(200).json(results);
  };

  Session.findAndCountAll({
    offset: req.params.start,
    limit: req.params.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getSession = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  Session.findById(req.params.session_id)
  .then(respond)
  .catch(onError);
};

exports.createSession = (req, res, next) => {
  const createList = {
    ip_address: req.body.ip_address,
    user_agent: req.body.user_agent,
  };

  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    result ? res.status(201).json(result) : next(error(400));
  };

  Session.create(createList)
  .then(respond)
  .catch(onError);
};

exports.updateSession = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      const updateList = {
        ip_address: req.body.ip_address || data.ip_address,
        user_agent: req.body.user_agent || data.user_agent,
        // ...
      };

      Session.update(updateList, {
        where: {
          session_id: req.params.session_id,
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

  Session.findById(req.params.session_id)
  .then(respond)
  .catch(onError);
};

exports.deleteSession = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      Session.destroy({
        where: {
          session_id: req.params.session_id,
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

  Session.findById(req.params.session_id)
  .then(respond)
  .catch(onError);
};
