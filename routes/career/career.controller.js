const error = require('../../helper/errorHandler');
const Career = require('../career/career.model.js');

exports.getAllCareer = function (req, res, next) {
  const respond = (results) => {
    res.status(200).json(results);
  };

  const onError = (err) => {
    next(err);
  };

  Career.findAll()
  .then(respond)
  .catch(onError);
};

exports.getCareer = function (req, res, next) {
  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Career.findOne({
    where: {
      career_id: req.params.career_id,
    },
  })
  .then(respond)
  .catch(onError);
};

exports.deleteCareer = function (req, res, next) {
  const respond = (num) => {
    if (num) {
      Career.destroy({
        where: {
          career_id: req.params.career_id,
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

  Career.findById(req.params.career_id)
  .then(respond)
  .catch(onError);
};


exports.updateCareer = function (req, res, next) {
  const updateList = {
    career_name: req.body.career_name,
    career_ex: req.body.career_name,
    career_photo: req.body.career_photo,
    career_due: req.body.career_due,
    club_id: req.body.club_id,
    // ...
  };

  const respond = (find) => {
    if (find) {
      Career.update(updateList, {
        where: {
          career_id: req.params.career_id,
        },
      })
      .then((result) => {
        res.status(201).json(result);
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

  Career.findOne({
    where: {
      career_id: req.params.career_id,
    },
  })
  .then(respond)
  .catch(onError);
};

exports.createCareer = function (req, res, next) {
  const createList = {
    career_name: req.body.career_name,
    career_ex: req.body.career_ex,
    career_photo: req.body.career_photo,
    career_due: req.body.career_due,
    club_id: req.body.club_id,
  };

  const respond = (career) => {
    career ? res.status(201).json(career) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Career.create(createList)
  .then(respond)
  .catch(onError);
};
