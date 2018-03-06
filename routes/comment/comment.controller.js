const Sequelize = require('sequelize');

const error = require('../../helper/errorHandler');

const Comment = require('./comment.model');
const Club = require('../club/club.model');

exports.getCommentByClubId = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    Comment.findAll({
      attributes: [
        [Sequelize.fn('AVG', Sequelize.col('COMMENT.club_rating')), 'club_rating_avg'],
      ],
      where: {
        club_id: req.params.club_id,
      },
    })
    .then((result) => {
      const dataStr = JSON.stringify(data);
      const dataJson = JSON.parse(dataStr);

      dataJson.club_rating_avg = parseFloat(result[0].dataValues.club_rating_avg).toFixed(1);

      data ? res.status(200).json(dataJson) : next(error(400));
    })
    .catch(onError);
  };

  Comment.findAndCountAll({
    where: {
      club_id: req.params.club_id,
    },
    offset: +req.params.start || +req.query.start,
    limit: +req.params.end || +req.query.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getCommentByWriter = (req, res, next) => {
  const Op = Sequelize.Op;

  const onError = (err) => {
    next(err);
  };

  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  };

  Comment.findAndCountAll({
    where: {
      [Op.and]: [
        {
          comment_writer: req.params.wrtier_id,
        },
        {
          comment_writer_type: req.params.type || req.query.type,
        },
      ],
    },
    offset: +req.params.start || +req.query.start,
    limit: +req.params.end || +req.query.end,
  })
  .then(respond)
  .catch(onError);
};

exports.createComment = (req, res, next) => {
  const createList = {
    comment_contents: req.body.comment_contents,
    comment_writer: req.body.comment_writer,
    comment_writer_type: req.body.comment_writer_type,
    comment_update: new Date(),
    club_rating: req.body.club_rating,
    club_id: req.body.club_id,
    // ...
  };

  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    Comment.findAll({
      where: {
        club_id: data.club_id,
      },
      attributes: [
        'club_id',
        [Sequelize.fn('AVG', Sequelize.col('COMMENT.club_rating')), 'club_rating_avg'],
      ],
    })
    .then((result) => {
      const updateList = {
        club_rating: parseFloat(result[0].dataValues.club_rating_avg).toFixed(1),
      };

      Club.update(updateList, {
        where: {
          club_id: data.club_id,
        },
      })
      .then(() => {
        res.status(201).json(data);
      })
      .catch(onError);
    })
    .catch(onError);
  };

  Comment.create(createList)
  .then(respond)
  .catch(onError);
};

exports.updateComment = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      const dataObj = JSON.parse(JSON.stringify(data));
      const updateList = Object.assign(dataObj, JSON.parse(JSON.stringify(req.body)));

      // update date
      updateList.comment_update = new Date();

      Comment.update(updateList, {
        where: {
          comment_id: req.params.comment_id,
        },
      })
      .then(() => {
        Comment.findAll({
          where: {
            club_id: data.club_id,
          },
          attributes: [
            'club_id',
            [Sequelize.fn('AVG', Sequelize.col('COMMENT.club_rating')), 'club_rating_avg'],
          ],
        })
        .then((result) => {
          const updateLists = {
            club_rating: parseFloat(result[0].dataValues.club_rating_avg).toFixed(1),
          };

          Club.update(updateLists, {
            where: {
              club_id: data.club_id,
            },
          })
          .then(() => {
            res.status(201).json(updateList);
          })
          .catch(onError);
        })
        .catch(onError);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  Comment.findById(req.params.comment_id)
  .then(respond)
  .catch(onError);
};

exports.deleteComment = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      Comment.destroy({
        where: {
          comment_id: req.params.comment_id,
        },
      })
      .then(() => {
        Comment.findAll({
          where: {
            club_id: data.club_id,
          },
          attributes: [
            'club_id',
            [Sequelize.fn('AVG', Sequelize.col('COMMENT.club_rating')), 'club_rating_avg'],
          ],
        })
        .then((result) => {
          const updateList = {
            club_rating: result[0].dataValues.club_rating_avg ? parseFloat(result[0].dataValues.club_rating_avg).toFixed(1) : 0,
          };

          Club.update(updateList, {
            where: {
              club_id: data.club_id,
            },
          })
          .then(() => {
            res.status(200).send(true);
          })
          .catch(onError);
        })
        .catch(onError);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  Comment.findById(req.params.comment_id)
  .then(respond)
  .catch(onError);
};
