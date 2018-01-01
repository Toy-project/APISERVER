const path = require('path');
const error = require(path.join(__dirname, '../../helper/errorHandler'));
const hash = require(path.join(__dirname, '../../helper/hashPassword'));
const auth = require(path.join(__dirname, '../../helper/authHelper'));

const Member = require(path.join(__dirname, '../member/member.model'));

exports.login = function(req, res, next) {
  console.log('login');

  const loginList = {
    mem_email: req.body.mem_email,
    mem_pw: req.body.mem_pw
  };

  const respond = result => {
    if(result) {
      const tokenList = {
        mem_email: result.mem_email,
        mem_name: result.mem_name,
        //...
      };

      hash.comparePw(loginList.mem_pw, result.mem_pw) 
      ? res.json({
        isValid: true,
        token_type: 'bearer',
        access_token: auth.tokenGenerator(tokenList),
        //...
      })
      : next(error(401));
    }
    else {
      next(error(401));
    }
  };

  const onError = err => {
    next(err);
  };

  Member.findOne({
    where: {
      mem_email: loginList.mem_email
    }
  })
  .then(respond)
  .catch(onError);
};
