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
    offset: +req.params.start || +req.query.start,
    limit: +req.params.end || +req.query.end,
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
      const dataObj = JSON.parse(JSON.stringify(data));
      const updateList = Object.assign(dataObj, JSON.parse(JSON.stringify(req.body)));

      Session.update(updateList, {
        where: {
          session_id: req.params.session_id,
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
        res.status(200).send(true);
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
