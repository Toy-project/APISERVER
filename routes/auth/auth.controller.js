const error = require('../../helper/errorHandler');
const hash = require('../../helper/hashPassword');
const authHelper = require('../../helper/authHelper');

const Member = require('../member/member.model');
const Club = require('../club/club.model');

exports.memberLogin = function (req, res, next) {
  const loginList = {
    mem_userid: req.body.mem_userid,
    mem_pw: req.body.mem_pw,
  };

  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      const tokenList = {
        mem_userid: data.mem_userid,
        mem_email: data.mem_email,
        mem_name: data.mem_name,
        // ...
      };
      const updateList = {
        mem_last_connect_date: new Date(),
      };

      if (hash.comparePw(loginList.mem_pw, data.mem_pw)) {
        Member.update(updateList, {
          where: {
            mem_id: data.mem_id,
          },
        })
        .then(() => {
          res.json({
            isValid: true,
            token_type: 'bearer',
            access_token: authHelper.tokenGenerator(tokenList),
          });
        })
        .catch(onError);
      } else {
        next(error(401));
      }
    } else {
      next(error(401));
    }
  };

  Member.findOne({
    where: {
      mem_userid: loginList.mem_userid,
    },
  })
  .then(respond)
  .catch(onError);
};

exports.clubLogin = function (req, res, next) {
  const loginList = {
    club_userid: req.body.club_userid,
    club_pw: req.body.club_pw,
  };

  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      const tokenList = {
        club_userid: data.club_userid,
        club_name: data.club_name,
        // ...
      };
      const updateList = {
        club_last_connect_date: new Date(),
      };

      if (hash.comparePw(loginList.club_pw, data.club_pw)) {
        Club.update(updateList, {
          where: {
            club_id: data.club_id,
          },
        })
        .then(() => {
          res.json({
            isValid: true,
            token_type: 'bearer',
            access_token: authHelper.tokenGenerator(tokenList),
          });
        })
        .catch(onError);
      } else {
        next(error(401));
      }
    } else {
      next(error(401));
    }
  };

  Club.findOne({
    where: {
      club_userid: loginList.club_userid,
    },
  })
  .then(respond)
  .catch(onError);
};
