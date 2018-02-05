const Sequelize = require('sequelize');

const error = require('../../helper/errorHandler');
const Comment = require('./comment.model.js');

exports.getCommentByClubId = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
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
  };

  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    res.status(201).json(result);
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
      const updateList = {
        comment_contents: req.body.comment_contents || data.comment_contents,
        comment_update: new Date(),
        club_rating: req.body.club_rating || data.club_rating,
      };
      
      Comment.update(updateList, {
        where: {
          comment_id: req.params.comment_id,
        },
      })
      .then((result) => {
        res.status(201).json(result);
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
      .then((result) => {
        res.send(200);
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
