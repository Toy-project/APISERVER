const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const error = require(path.join(__dirname, '../../helper/errorHandler'));

const router = express.Router();
const Member = require(path.join(__dirname, '../member/member.model'));

const bcrypt = require('bcrypt');
const authCotroller = require(path.join(__dirname, './auth.controller'));

router.post('/login', function(req, res, next) {
  const email = req.body.mem_email;
  const pw = req.body.mem_pw;

  Member.find({
    where: {
      mem_email: email
    }
  })
  .then(result => {
    const resultData = result;
    
    // set error
    let err = error(401);
    
    if(!resultData) return next(err);

    // password compare
    bcrypt.compare(pw, result.mem_pw).then(bool => {
      if(bool) {
        const token = authCotroller.tokenGenerator({
          email: resultData.mem_email,
          name: resultData.mem_name,
          //...
        });
        res.json({
          isValid: true,
          token_type: 'bearer',
          access_token: token
        });
      }
      else {
        next(err);
      }
    });
  })
  .catch(err => {
    res.send(err);
  });
});


module.exports = router;