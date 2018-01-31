const error = require('../../helper/errorHandler');
const Comment = require('./comment.model.js');

exports.getCommentByClubId = function (req, res, next) {
  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Comment.findAndCountAll({
    where: {
      club_id: req.params.club_id,
    },
    offset: req.params.start,
    limit: req.params.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getCommentByMemId = (req, res, next) => {
  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Comment.findAndCountAll({
    where: {
      mem_id: req.params.mem_id,
    },
    offset: req.params.start,
    limit: req.params.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getCommentByMemIdClubId = (req, res, next) => {
  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Comment.findAndCountAll({
    where: {
      mem_id: req.params.mem_id,
      club_id: req.params.club_id,
    },
    offset: req.params.start,
    limit: req.params.end,
  })
  .then(respond)
  .catch(onError);
};

exports.createComment = (req, res, next) => {
  const createList = {
    comment_contents: req.body.comment_contents,
    club_rating: req.body.club_rating,
    comment_update: new Date(),
    mem_id: req.body.mem_id,
    club_id: req.body.club_id,
  };

  const respond = (result) => {
    res.status(201).json(result);
  };

  const onError = (err) => {
    next(err);
  };

  Comment.create(createList)
  .then(respond)
  .catch(onError);
};

exports.updateComment = (req, res, next) => {
  const respond = (data) => {
    if (data) {
      const updateList = {
        comment_contents: req.body.comment_contents || data.comment_contents,
        club_rating: req.body.club_rating || data.club_rating,
        comment_update: new Date(),
      };
      
      Comment.update(updateList, {
        where: {
          comment_id: req.params.comment_id,
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

  Comment.findById(req.params.comment_id)
  .then(respond)
  .catch(onError);
};

exports.deleteComment = (req, res, next) => {
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

  Comment.findById(req.params.comment_id)
  .then(respond)
  .catch(onError);
};
