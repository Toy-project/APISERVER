const path = require('path');
const error = require(path.join(__dirname, '../../helper/errorHandler'));

const Sns = require(path.join(__dirname, './sns.model.js'));

exports.getAllSns = function(req, res, next) {
  console.log("get all sns list");

  const respond = results => {
    res.status(200).json(results);
  };

  const onError = err => {
    res.send(err);
  };

  Sns.findAll()
  .then(respond)
  .catch(onError);
};

exports.getSns = function(req, res, next) {
  console.log("get a specific sns");

  const respond = result => {
    result ? res.status(200).json(result) : next(error(400));
  };

  const onError = err => {
    res.send(err);
  };

  Sns.findOne({
    where: {
      sns_id: req.params.sns_id
    },
  })
  .then(respond)
  .catch(onError);
};

exports.createSns = function(req, res, next) {
  console.log("Create a sns");

  const createList = {
    sns_name,
    sns_url,
    club_id,
    //...
  } = req.body;

  const respond = result => {
    res.status(201).json(result);
  };

  const onError = err => {
    console.log(err);
    next(err);
  };

  Sns.create(createList)
  .then(respond)
  .catch(onError);
};

exports.deleteSns = function(req, res, next) {
  console.log("Remove a sns");

  const respond = num => {
    // number (0 or 1)
    if(num) {
      Sns.destroy({
        where: {
          sns_id: req.params.sns_id,
        }
      })
      .then(result => {
        res.send(200);
      })
      .catch(err => {
        next(err);
      });
    }
    else {
      next(error(400));
    }
  };

  const onError = err => {
    next(err);
  };

  Sns.findById(req.params.sns_id)
  .then(respond)
  .catch(onError);
};

exports.updateSns = function(req, res, next) {
  console.log("Update a sns");

  const updateList = {
    sns_name,
    sns_url,
    //...
  } = req.body;

  const respond = num => {
    // number (0 or 1)
    if(num) {
      Sns.update(updateList, {
        where: {
          sns_id: req.params.sns_id,
        }
      })
      .then(result => {
        // result is number (o or 1)
        // 0: 기존 데이터와 동일
        // 1: 기존 데이터와 달라 업데이트 성공
        res.status(201).send(result);
      })
      .catch(err => {
        next(err);
      }); 
    }
    else {
      next(error(400));
    }
  };

  const onError = err => {
    next(err);
  };

  Sns.findById(req.params.sns_id)
  .then(respond)
  .catch(onError);
};
