const Sequelize = require('sequelize');

const error = require('../../helper/errorHandler');
const hashPassword = require('../../helper/hashPassword');
const folderHelper = require('../../helper/folderHelper');
const uploadHelper = require('../../helper/uploadHelper');

const Club = require('./club.model');
const Category = require('../category/category.model');
const Tag = require('../tag/tag.model');
const Sns = require('../sns/sns.model');
const Career = require('../career/career.model');

exports.getAllClub = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (results) => {
    res.status(200).json(results);
  };

  Club.findAndCountAll({
    attributes: {
      exclude: [
        'club_pw',
      ],
    },
    offset: +req.params.start || +req.query.start,
    limit: +req.params.end || +req.query.end,
    order: [
      ['club_id', 'DESC'],
    ],
    include: [
      {
        model: Category,
        as: 'category',
      },
      {
        model: Tag,
        as: 'tag',
      },
    ],
  })
  .then(respond)
  .catch(onError);
};

exports.getClub = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  Club.findOne({
    where: {
      club_id: req.params.club_id,
    },
    attributes: {
      exclude: [
        'club_pw',
      ],
    },
    include: [
      {
        model: Category,
        as: 'category',
      },
      {
        model: Tag,
        as: 'tag',
      },
      {
        model: Sns,
        as: 'sns',
      },
      {
        model: Career,
        as: 'career',
      },
    ],
  })
  .then(respond)
  .catch(onError);
};

exports.getClubUserId = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    result ? res.status(200).send(true) : res.status(200).send(false);
  };

  Club.findOne({
    where: {
      club_userid: req.params.userid,
    },
  })
  .then(respond)
  .catch(onError);
};

exports.getClubEmail = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    result ? res.status(200).send(true) : res.status(200).send(false);
  };

  Club.findOne({
    where: {
      club_email: req.params.email,
    },
  })
  .then(respond)
  .catch(onError);
};

exports.getClubName = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    result ? res.status(200).send(true) : res.status(200).send(false);
  };

  Club.findOne({
    where: {
      club_name: req.params.name,
    },
  })
  .then(respond)
  .catch(onError);
};

exports.getClubSearch = (req, res, next) => {
  const Op = Sequelize.Op;

  const onError = (err) => {
    next(err);
  };

  const respond = (results) => {
    res.status(200).json(results);
  };

  Club.findAndCountAll({
    where: {
      club_name: {
        [Op.like]: `%${req.params.keyword}%`,
      },
    },
    attributes: {
      exclude: [
        'club_pw',
      ],
    },
    include: [
      {
        model: Category,
        as: 'category',
      },
      {
        model: Tag,
        as: 'tag',
      },
      {
        model: Sns,
        as: 'sns',
      },
    ],
    offset: +req.params.start || +req.query.start,
    limit: +req.params.end || +req.query.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getClubCategory = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (results) => {
    res.status(200).json(results);
  };

  Club.findAndCountAll({
    where: {
      cate_id: req.params.cate_id,
    },
    attributes: {
      exclude: [
        'club_pw',
      ],
    },
    include: [
      {
        model: Category,
        as: 'category',
      },
      {
        model: Tag,
        as: 'tag',
      },
      {
        model: Sns,
        as: 'sns',
      },
    ],
    offset: +req.params.start || +req.query.start,
    limit: +req.params.end || +req.query.end,
  })
  .then(respond)
  .catch(onError);
};

exports.createClub = function (req, res, next) {
  const createList = {
    club_userid: req.body.club_userid,
    club_email: req.body.club_email,
    club_pw: req.body.club_pw,
    club_username: req.body.club_username,
    club_name: req.body.club_name,
    club_phone: req.body.club_phone,
    club_copyright: req.body.club_copyright,
    club_college: req.body.club_college,
    cate_id: req.body.cate_id,
    union_enabled: req.body.union_enabled,
    club_create_date: new Date(),
    club_last_connect_date: new Date(),
    club_update: new Date(),
    // ...
  };

  // hash password
  createList.club_pw = hashPassword.createPw(createList.club_pw);

  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    res.status(201).json(result);
  };

  Club.create(createList)
  .then(respond)
  .catch(onError);
};

exports.deleteClub = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      Club.destroy({
        where: {
          club_id: req.params.club_id,
        },
      })
      .then((result) => {
        folderHelper.deleteF(`images/upload/club/${req.params.club_id}`);
        res.status(200).send(true);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  Club.findById(req.params.club_id)
  .then(respond)
  .catch(onError);
};

exports.updateClub = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      const key = req.params.club_id;
      const options = {
        filesize: 2 * 1024 * 1024,
        filename: 'profile',
        path: `images/upload/club/${key}`,
        field: 'club_profile_photo',
      };

      const upload = uploadHelper.uploadSingle(req, res, options);
      upload(req, res, (err) => {
        if (err) {
          next(error(400));
        } else {
          const dataObj = JSON.parse(JSON.stringify(data));
          const updateList = Object.assign(dataObj, JSON.parse(JSON.stringify(req.body)));

          // update date
          updateList.club_update = new Date();

          // update file path
          updateList.club_profile_photo = req.file ? req.file.path : data.club_profile_photo;

          // compare password and hash
          if (updateList.club_pw) {
            updateList.club_pw = hashPassword.updatePw(updateList.club_pw, data.club_pw);
          } else {
            updateList.club_pw = data.club_pw;
          }

          Club.update(updateList, {
            where: {
              club_id: req.params.club_id,
            },
          })
          .then(() => {
            res.status(201).json(updateList);
          })
          .catch(onError);
        }
      });
    } else {
      next(error(400));
    }
  };

  Club.findById(req.params.club_id)
  .then(respond)
  .catch(onError);
};

exports.updateClubViews = function (req, res, next) {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      // views + 1
      const updateList = {
        club_views: data.club_views + 1,
      };

      Club.update(updateList, {
        where: {
          club_id: req.params.club_id,
        },
      })
      .then((result) => {
        res.status(201).json(updateList);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  Club.findOne({
    attributes: ['club_views'],
    where: {
      club_id: req.params.club_id,
    },
  })
  .then(respond)
  .catch(onError);
};
