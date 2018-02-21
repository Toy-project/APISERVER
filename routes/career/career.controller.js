const error = require('../../helper/errorHandler');
const folderHelper = require('../../helper/folderHelper');
const uploadHelper = require('../../helper/uploadHelper');
const sequelize = require('../sequelize');

const Career = require('../career/career.model');

exports.getAllCareer = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (results) => {
    res.status(200).json(results);
  };

  Career.findAndCountAll({
    offset: +req.params.start || +req.query.start,
    limit: +req.params.end || +req.query.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getAllCareerByClubId = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (results) => {
    res.status(200).json(results);
  };

  Career.findAndCountAll({
    where: {
      club_id: req.params.club_id,
    },
    offset: +req.params.start || +req.query.start,
    limit: +req.params.end || +req.query.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getCareer = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  Career.findById(req.params.career_id)
  .then(respond)
  .catch(onError);
};

exports.deleteCareer = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      Career.destroy({
        where: {
          career_id: req.params.career_id,
        },
      })
      .then((result) => {
        folderHelper.deleteF(`images/upload/career/${req.params.career_id}`);
        res.send(200);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  Career.findById(req.params.career_id)
  .then(respond)
  .catch(onError);
};

exports.deleteCareerByClubId = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data.count) {
      Career.destroy({
        where: {
          club_id: req.params.club_id,
        },
      })
      .then((result) => {
        for (let i = 0; i < data.rows.length; i++) {
          folderHelper.deleteF(`images/upload/career/${data.rows[i].dataValues.career_id}`);
        }

        res.send(200);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  Career.findAndCountAll({
    where: {
      club_id: req.params.club_id,
    },
  })
  .then(respond)
  .catch(onError);
};

exports.updateCareer = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      const key = req.params.career_id;
      const options = {
        filesize: 2 * 1024 * 1024,
        filename: 'thumb',
        path: `images/upload/career/${key}`,
        field: 'career_photo',
      };

      const upload = uploadHelper.uploadSingle(req, res, options);
      upload(req, res, (err) => {
        if (err) {
          next(error(400));
        } else {
          const updateList = {
            career_name: req.body.career_name || data.career_name,
            career_ex: req.body.career_ex || data.career_ex,
            career_photo: req.file ? req.file.path : data.career_photo,
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
          .catch(onError);
        }
      });
    } else {
      next(error(400));
    }
  };

  Career.findById(req.params.career_id)
  .then(respond)
  .catch(onError);
};

exports.createCareer = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      const key = data[0][0].Auto_increment;
      const options = {
        filesize: 2 * 1024 * 1024,
        filename: 'thumb',
        path: `images/upload/career/${key}`,
        field: 'career_photo',
      };

      const upload = uploadHelper.uploadSingle(req, res, options);
      upload(req, res, (err) => {
        if (err) {
          next(error(400));
        } else {
          const createList = {
            career_name: req.body.career_name,
            career_ex: req.body.career_ex,
            career_photo: req.file ? req.file.path : null,
            career_due_start: req.body.career_due_start,
            career_due_end: req.body.career_due_end,
            career_people: req.body.career_people,
            career_co: req.body.career_co,
            club_id: req.body.club_id,
          };

          Career.create(createList)
          .then((result) => {
            result ? res.status(201).json(result) : next(error(400));
          })
          .catch(onError);
        }
      });
    } else {
      next(error(500));
    }
  };

  sequelize.query('SHOW TABLE STATUS WHERE NAME="CAREER"')
  .then(respond)
  .catch(onError);
};
