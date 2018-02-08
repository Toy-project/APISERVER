const Sequelize = require('sequelize');

const error = require('../../helper/errorHandler');
const hashPassword = require('../../helper/hashPassword');
const folderHelper = require('../../helper/folderHelper');
const uploadHelper = require('../../helper/uploadHelper');

const Club = require('./club.model');
const Category = require('../category/category.model');
const Tag = require('../tag/tag.model');
const Sns = require('../sns/sns.model');

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
      {
        model: Sns,
        as: 'sns',
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
    console.log(err);
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
        folderHelper.deleteF(`images/club/${req.params.club_id}`);
        res.send(200);
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
      const updateList = {
        club_email: req.body.club_email || data.club_email,
        club_pw: req.body.club_pw,
        club_username: req.body.club_username || data.club_username,
        club_people: req.body.club_people || data.club_people,
        club_name: req.body.club_name || data.club_name,
        club_phone: req.body.club_phone || data.club_phone,
        club_ex: req.body.club_ex || data.club_ex,
        club_copyright: req.body.club_copyright || data.club_copyright,
        club_college: req.body.club_college || data.club_college,
        cate_id: req.body.cate_id || data.cate_id,
        tag_id: req.body.tag_id || data.tag_id,
        club_history: req.body.club_history || data.club_history,
        club_price_duration: req.body.club_price_duration || data.club_price_duration,
        union_enabled: req.body.union_enabled || data.union_enabled,
        club_update: new Date(),
        // ...
      };

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
      .then((result) => {
        // result is number (o or 1)
        // 0: 기존 데이터와 동일
        // 1: 기존 데이터와 달라 업데이트 성공
        res.status(201).json(result);
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

exports.updateClubProfile = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      uploadHelper.clubProfile(req, res, (err) => {
        if (err) {
          next(err);
        } else {
          const updateList = {
            club_profile_photo: req.file.path || data.club_profile_photo,
            club_update: new Date(),
            // ...
          };

          Club.update(updateList, {
            where: {
              club_id: req.params.club_id,
            },
          })
          .then((result) => {
            res.status(201).json(req.file);
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
