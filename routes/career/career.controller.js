const error = require('../../helper/errorHandler');
const folderHelper = require('../../helper/folderHelper');

const Career = require('../career/career.model.js');

exports.getAllCareer = (req, res, next) => {
  const respond = (results) => {
    res.status(200).json(results);
  };

  const onError = (err) => {
    next(err);
  };

  Career.findAndCountAll({
    offset: req.params.start,
    limit: req.params.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getAllClubByCareerId = (req, res, next) => {
  const respond = (results) => {
    res.status(200).json(results);
  };

  const onError = (err) => {
    next(err);
  };

  Career.findAndCountAll({
    where: {
      club_id: req.params.club_id,
    },
    offset: req.params.start,
    limit: req.params.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getCareer = (req, res, next) => {
  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Career.findById(req.params.career_id)
  .then(respond)
  .catch(onError);
};

exports.deleteCareer = (req, res, next) => {
  const respond = (data) => {
    if (data) {
      Career.destroy({
        where: {
          career_id: req.params.career_id,
        },
      })
      .then((result) => {
        folderHelper.deleteF(`images/career/${req.params.career_id}`);
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


exports.updateCareer = (req, res, next) => {
  const respond = (data) => {
    if (data) {
      const updateList = {
        career_name: req.body.career_name || data.career_name,
        career_ex: req.body.career_name || data.career_ex,
        career_photo: req.body.career_photo || data.career_photo,
        career_due_start: req.body.career_due_start || data.career_due_start,
        career_due_end: req.body.career_due_end || data.career_due_end,
        career_people: req.body.career_people || data.career_people,
        career_co: req.body.career_co || data.career_co,
        // ...
      };

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

  Career.findById(req.params.career_id)
  .then(respond)
  .catch(onError);
};

exports.createCareer = (req, res, next) => {
  const createList = {
    career_name: req.body.career_name,
    career_ex: req.body.career_ex,
    career_photo: req.body.career_photo,
    career_due_start: req.body.career_due_start,
    career_due_end: req.body.career_due_end,
    career_people: req.body.career_people,
    career_co: req.body.career_co,
    club_id: req.body.club_id,
    // ...
  };

  const respond = (result) => {
    result ? res.status(201).json(result) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Career.create(createList)
  .then(respond)
  .catch(onError);
};

exports.updateCareerPhoto = (req, res, next) => {
  const respond = (data) => {
    if (data) {
      const updateList = {
        career_photo: req.file.path || data.career_photo,
        // ...
      };

      Career.update(updateList, {
        where: {
          career_id: req.params.career_id,
        },
      })
      .then((result) => {
        res.status(201).json(req.file);
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
