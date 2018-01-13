const path = require('path');
const error = require(path.join(__dirname, '../../helper/errorHandler'));
const hash = require(path.join(__dirname, '../../helper/hashPassword'));

const Club = require(path.join(__dirname, './club.model.js'));
const Category = require(path.join(__dirname, '../category/category.model.js'));
const Tag = require(path.join(__dirname, '../tag/tag.model.js'));
const Sns = require(path.join(__dirname, '../sns/sns.model.js'));

exports.getAllClub = function(req, res, next) {
  console.log("get all club list");

  const respond = results => {
    res.status(200).json(results);
  };

  const onError = err => {
    next(err);
  };

  Club.findAll()
  .then(respond)
  .catch(onError);
};

exports.getLimitingClub = function(req, res, next) {
  console.log("get limiting club list");

  const respond = results => {
    res.status(200).json(results);
  };

  const onError = err => {
    next(err);
  };

  Club.findAll({
      offset: parseInt(req.params.start),
      limit: parseInt(req.params.end),
  })
  .then(respond)
  .catch(onError);
};

exports.getClub = function(req, res, next) {
  console.log("get a specific club");

  const respond = result => {
    result ? res.status(200).json(result) : next(error(400));
  };

  const onError = err => {
    next(err);
  };

  Club.findOne({
    where: {
      club_id: req.params.club_id
    },
    include: [
      {
        model: Category,
        as: 'category',
        where: {
          cate_id: req.params.cate_id || req.query.cate_id
        }
      },
      {
        model: Tag,
        as: 'tag',
        where: {
          tag_id: req.params.tag_id || req.query.tag_id
        }
      },
    ]
  })
  .then(respond)
  .catch(onError);
};

exports.createClub = function(req, res, next) {
  console.log("Create a club");

  const createList = {
    club_userid: req.body.club_userid,
    club_email: req.body.club_email,
    club_pw: req.body.club_pw,
    club_name: req.body.club_name,
    club_profile_photo: req.body.club_profile_photo,
    club_phone: req.body.club_phone,
    club_photo: req.body.club_photo,
    club_ex: req.body.club_ex,
    club_copyright: req.body.club_copyright,
    club_college: req.body.club_college,
    cate_id: req.body.cate_id,
    tag_id: req.body.tag_id,
    club_history: req.body.club_history,
    club_price_duration: req.body.club_price_duration,
    union_enabled: req.body.union_enabled,
    //...
  };

  console.log(createList);

  // hash password
  createList.club_pw = hash.createPw(createList.club_pw);

  const respond = result => {
    res.status(201).json(result);
  };

  const onError = err => {
    next(err);
  };

  Club.create(createList)
  .then(respond)
  .catch(onError);
};

exports.deleteClub = function(req, res, next) {
  console.log("Remove a club");

  const respond = num => {
    // number (0 or 1)
    if(num) {
      Club.destroy({
        where: {
          club_id: req.params.club_id
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

  Club.findById(req.params.club_id)
  .then(respond)
  .catch(onError);
};

exports.updateClub = function(req, res, next) {
  console.log("Update a club");

  // update list
  const updateList = {
    club_pw: req.body.club_pw,
    club_name: req.body.club_name,
    club_profile_photo: req.body.club_profile_photo,
    club_phone: req.body.club_phone,
    club_photo: req.body.club_photo,
    club_ex: req.body.club_ex,
    club_copyright: req.body.club_copyright,
    club_college: req.body.club_college,
    cate_id: req.body.cate_id,
    tag_id: req.body.tag_id,
    club_history: req.body.club_history,
    club_price_duration: req.body.club_price_duration,
    union_enabled: req.body.union_enabled,
    //...
  };

  const respond = find => {
    if(find) {
      // compare password and hash
      updateList.club_pw = hash.updatePw(updateList.club_pw, find.club_pw);

      Club.update(updateList, {
        where: {
          club_id: req.params.club_id
        }
      })
      .then(result => {
        // result is number (o or 1)
        // 0: 기존 데이터와 동일
        // 1: 기존 데이터와 달라 업데이트 성공
        res.status(201).json(result);
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

  Club.findOne({
    attributes: ['club_pw'],
    where: {
      club_id: req.params.club_id
    }
  })
  .then(respond)
  .catch(onError);
}

exports.updateClubViews = function(req, res, next) {
  console.log('Update a club views');

  const respond = find => {
    if(find) {
      // views + 1
      const updateList = {
        club_views: find.club_views + 1
      };

      Club.update(updateList, {
        where: {
          club_id: req.params.club_id
        }
      })
      .then(result => {
        res.status(201).json(updateList);
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

  Club.findOne({
    attributes: ['club_views'],
    where: {
      club_id: req.params.club_id
    }
  })
  .then(respond)
  .catch(onError);
};
