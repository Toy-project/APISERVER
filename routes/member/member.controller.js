const path = require('path');
const Member = require(path.join(__dirname, './member.model.js'));
const hashPassword = require(path.join(__dirname, '../../helper/hashPassword.js'));

exports.getAllMember = function(req, res, next) {
  console.log("get all users");

  const respond = (results) => {
    res.status(200).json(results);
  };

  const onError = (err) => {
    next(err);
  };

  Member.findAll()
  .then(respond)
  .catch(onError);
};

exports.getMember = function(req, res, next) {
  console.log("get a specific user");

  const mem_id = req.params.mem_id;

  const respond = (results) => {
    res.status(200).json(results);
  }

  const onError = (err) => {
    next(err);
  }

  Member.findOne({
    where : {
      mem_id : mem_id
    }
  })
  .then(respond)
  .catch(onError);
};

exports.createMember = function(req, res, next) {
  console.log("Create a user");
  const createList = { mem_email, mem_name, mem_pw, mem_phone, mem_mail_agree, mem_last_connect_date, mem_update} = req.body;

  createList.mem_last_connect_date = new Date();
  createList.mem_update = new Date();

  //Hashing password
  createList.mem_pw = hashPassword.createPw(mem_pw);

  const create = (user, created) => {
    if(!created){
      next(error(400));
    } else {
      return user;
    }
  }

  const respond = (user) => {
    res.status(201).json(user.dataValues);
  };

  const onError = (err) => {
    next(err);
  };

  Member.findOrCreate({
    defaults : createList,
    where : {
      mem_email : mem_email
    }
  })
  .spread(create)
  .then(respond)
  .catch(onError);
};

exports.deleteMember = (req, res, next) => {
  console.log("Remove a member");
  const mem_id = req.params.mem_id;

  const respond = (results) => {
    res.send(200);
  };

  const onError = (err) => {
    next(err);
  };

  Member.destroy({
    where : {
      mem_id : mem_id
    }
  })
  .then(respond)
  .catch(onError);
};

exports.updateMember = (req, res, next) => {
  console.log("Update a member");

  const updateList = { mem_name, mem_pw, mem_phone, mem_mail_agree } = req.body;
  const mem_id = req.params.mem_id;

  const HasingAndUpdating = (oldList) => {
    //Checking password with hashed one.
    updateList.mem_pw = hashPassword.updatePw(updateList.mem_pw, oldList.mem_pw);

    //Updating
    Member.update(updateList, {
      where : {
        mem_id : mem_id
      }
    })
    .then(respond)
    .catch(onError);
  };

  const respond = (results) => {
    res.status(201).json(results);
  };

  const onError = (err) => {
    next(err);
  };

  //Hashing and Updating
  Member.findOne({
    attributes : ['mem_pw'],
    where : {
      mem_id : mem_id
    }
  })
  .then(HasingAndUpdating)
  .catch(onError);
};
