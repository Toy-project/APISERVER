const path = require('path');
const error = require(path.join(__dirname, '../../helper/errorHandler'));
const Session = require(path.join(__dirname, './session.model.js'));

exports.GetAllSession = (req, res, next) => {

  const respond = (results) => {
    (results) ? res.status(200).json(results) : next(error(400));
  }

  const onError = (err) => {
    next(err);
  }

  Session.findAll()
  .then(respond)
  .catch(onError);
}

exports.GetSession = (req, res, next) => {
  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  }

  const onError = (err) => {
    next(err);
  }

  Session.findById(req.params.session_id)
  .then(respond)
  .catch(onError);
}

exports.createSession = (req, res, next) => {
  const createList = {
    ip_address : req.body.ip_address,
    user_agent : req.body.user_agent
  }

  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  }

  const onError = (err) => {
    next(err);
  }

  Session.create(createList)
  .then(respond)
  .catch(onError);
}

exports.updateSession = (req, res, next) => {

  const updateList = {
    ip_address : req.body.ip_address,
    user_agent : req.body.user_agent
  }

  const respond = (results) => {
    results ? res.status(201).json(results) : next(error(400));
  }

  const onError = (err) => {
    next(err);
  }

  Session.update(updateList, {
    where : {
      session_id : req.params.session_id
    }
  })
  .then(respond)
  .catch(onError);
}

exports.deleteSession = (req, res, next) => {

  const respond = (results) => {
    if(results){
      Session.destroy({
        where : {
          session_id : req.params.session_id
        }
      })
      .then((results) => {
        res.send(200);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  }

  const onError = (err) => {
    next(err);
  }

  Session.findById(req.params.session_id)
  .then(respond)
  .catch(onError);
}
