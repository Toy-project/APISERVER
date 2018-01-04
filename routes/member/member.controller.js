const path = require('path');
const Member = require(path.join(__dirname, './member.model.js'));
const error = require(path.join(__dirname, '../../helper/errorHandler'));
const hashPassword = require(path.join(__dirname, '../../helper/hashPassword.js'));

exports.getAllMember = function(req, res, next) {

  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Member.findAll()
  .then(respond)
  .catch(onError);
};

exports.getMember = function(req, res, next) {

  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  }

  const onError = (err) => {
    next(err);
  }

  Member.findById(req.params.mem_id)
  .then(respond)
  .catch(onError);
};

exports.createMember = function(req, res, next) {

  const createList = {
    mem_email : req.body.mem_email,
    mem_name : req.body.mem_name,
    mem_profile_photo : req.body.mem_profile_photo,
    mem_pw : req.body.mem_pw,
    mem_phone : req.body.mem_phone,
    mem_mail_agree : req.body.mem_mail_agree,
    mem_last_connect_date : new Date(),
    mem_update : new Date()
  };

  //Hashing password
  createList.mem_pw = hashPassword.createPw(createList.mem_pw);

  const respond = (results) => {
    if(!results){
      Member.create(createList)
      .then((results) => {
        res.status(201).json(results);
      })
      .catch(err => {
        next(err);
      })
    } else {
      next(error(400));
    }
  };

  const onError = (err) => {
    next(err);
  };

  Member.findOne({
    where : {
      mem_email : createList.mem_email
    }
  })
  .then(respond)
  .catch(onError);
};

exports.deleteMember = (req, res, next) => {

  const respond = (results) => {
    if(results){
      Member.destroy({
        where : {
          mem_id : req.params.mem_id
        }
      })
      .then((results) => {
        res.send(200);
      })
      .catch(err => {
        next(err);
      });
    } else {
      next(error(400));
    }
  };

  const onError = (err) => {
    next(err);
  };

  Member.findById(req.params.mem_id)
  .then(respond)
  .catch(onError);
};

exports.updateMember = (req, res, next) => {

  const updateList = {
    mem_name : req.body.mem_name,
    mem_pw : req.body.mem_pw,
    mem_phone : req.body.mem_phone,
    mem_mail_agree : req.body.mem_mail_agree
  };

  const respond = (oldList) => {

    if(oldList){
      //Checking password with hashed one.
      updateList.mem_pw = hashPassword.updatePw(updateList.mem_pw, oldList.mem_pw);

      //Updating
      Member.update(updateList, {
        where : {
          mem_id : req.params.mem_id
        }
      })
      .then((results) => {
        res.status(201).json(results);
      })
      .catch(err => {
        next(err);
      });
    } else {
      next(error(400));
    }
  };

  const onError = (err) => {
    next(err);
  };

  //Hashing and Updating
  Member.findOne({
    attributes : ['mem_pw'],
    where : {
      mem_id : req.params.mem_id
    }
  })
  .then(respond)
  .catch(onError);
};
