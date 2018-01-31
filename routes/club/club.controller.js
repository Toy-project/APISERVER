const error = require('../../helper/errorHandler');
const hashPassword = require('../../helper/hashPassword');
const folderHelper = require('../../helper/folderHelper');

const Club = require('./club.model.js');
const Category = require('../category/category.model.js');
const Tag = require('../tag/tag.model.js');
const Sns = require('../sns/sns.model.js');

exports.getAllClub = function (req, res, next) {
  const respond = (results) => {
    res.status(200).json(results);
  };

  const onError = (err) => {
    next(err);
  };

  Club.findAndCountAll({
    offset: req.params.start,
    limit: req.params.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getClub = (req, res, next) => {
  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Club.findOne({
    where: {
      club_id: req.params.club_id,
    },
    include: [
      {
        model: Category,
        as: 'category',
        where: {
          cate_id: req.params.cate_id || req.query.cate_id,
        },
      },
      {
        model: Tag,
        as: 'tag',
        where: {
          tag_id: req.params.tag_id || req.query.tag_id,
        },
      },
    ],
  })
  .then(respond)
  .catch(onError);
};

exports.createClub = function (req, res, next) {
  const createList = {
    club_userid: req.body.club_userid,
    club_email: req.body.club_email,
    club_pw: req.body.club_pw,
    club_name: req.body.club_name,
    club_phone: req.body.club_phone,
    club_ex: req.body.club_ex,
    club_copyright: req.body.club_copyright,
    club_college: req.body.club_college,
    cate_id: req.body.cate_id,
    tag_id: req.body.tag_id,
    club_history: req.body.club_history,
    club_price_duration: req.body.club_price_duration,
    union_enabled: req.body.union_enabled,
    club_create_date: new Date(),
    club_last_connect_date: new Date(),
    club_update: new Date(),
    // ...
  };

  // hash password
  createList.club_pw = hashPassword.createPw(createList.club_pw);

  const respond = (result) => {
    res.status(201).json(result);
  };

  const onError = (err) => {
    next(err);
  };

  Club.create(createList)
  .then(respond)
  .catch(onError);
};

exports.deleteClub = function (req, res, next) {
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

  Club.findById(req.params.club_id)
  .then(respond)
  .catch(onError);
};

exports.updateClub = function (req, res, next) {
  const respond = (data) => {
    if (data) {
      const updateList = {
        club_email: req.body.club_email || data.club_email,
        club_pw: req.body.club_pw,
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

  Club.findById(req.params.club_id)
  .then(respond)
  .catch(onError);
};

exports.updateClubViews = function (req, res, next) {
  const respond = (find) => {
    if (find) {
      // views + 1
      const updateList = {
        club_views: find.club_views + 1,
      };

      Club.update(updateList, {
        where: {
          club_id: req.params.club_id,
        },
      })
      .then((result) => {
        res.status(201).json(updateList);
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
  const respond = (data) => {
    if (data) {
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

  Club.findById(req.params.club_id)
  .then(respond)
  .catch(onError);
};
