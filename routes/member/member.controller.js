const path = require('path');
const Member = require(path.join(__dirname, './member.model.js'));

const bcrypt = require('bcrypt');

exports.getAllMember = function(req, res, next) {
  console.log("get all users");

  const respond = (results) => {
    res.status(200).json(results);
  }

  const onError = (err) => {
    next(err);
  }

  Member.findAll()
  .then(respond)
  .catch(onError);
}

exports.getMember = function(req, res, next) {
  console.log("get a specific user");

  const mem_id = req.params.mem_id;

  const respond = (results) => {
    console.log("Respond");
    res.status(200).json(results);
  }

  const onError = (err) => {
    console.log("OnError");
    next(err);
  }

  Member.findOne({
    where : {
      mem_id : mem_id
    }
  })
  .then(respond)
  .catch(onError);
}

exports.register = function(req, res, next) {
  console.log("Create a user");
  const createList = { mem_email, mem_name, mem_pw, mem_phone, mem_type, mem_mail_agree, mem_last_connect_date, mem_update} = req.body;

  createList.mem_last_connect_date = new Date();
  createList.mem_update = new Date();

  //Hashing password
  createList.mem_pw = hashedPassword(mem_pw);

  const create = (user, created) => {
    console.log("User : " + user);
    console.log("Created : " + created);
    if(!created){
      throw new Error('mem_email exists');
    } else {
      return user;
    }
  }

  const respond = (user) => {
    console.log("respond");
    res.status(201).json(user.dataValues);
  }

  const onError = (err) => {
    console.log("onError");
    next(err);
  }

  Member.findOrCreate({
    defaults : createList,
    where : {
      mem_email : mem_email
    }
  })
  .spread(create)
  .then(respond)
  .catch(onError)
}

exports.removeMember = (req, res, next) => {
  console.log("Remove a member");
  const mem_id = req.params.mem_id;

  const respond = (results) => {
    res.status(200).json({
      isDeleted : true
    });
  }

  const onError = (err) => {
    console.log("onError");
    next(err);
  }

  Member.destroy({
    where : {
      mem_id : mem_id
    }
  })
  .then(respond)
  .catch(onError)
}

exports.updateMember = (req, res, next) => {
  console.log("Update a member");

  const updateList = { mem_name, mem_pw, mem_phone, mem_type, mem_mail_agree } = req.body;
  const mem_id = req.params.mem_id;

  const HasingAndUpdating = (oldList) => {
    console.log('Hasing Password And Updating');
    //console.log('results : ' + results.mem_pw);

    //If false, hashing
    if(!bcrypt.compareSync(updateList.mem_pw, oldList.mem_pw)){
      console.log("Password has been changed")
      updateList.mem_pw = hashedPassword(updateList.mem_pw);
    } else {
      updateList.mem_pw = oldList.mem_pw;
    }

    //Updating
    Member.update(updateList, {
      where : {
        mem_id : mem_id
      }
    })
    .then(respond)
    .catch(onError)

  }

  const respond = (results) => {
    console.log('Respond');
    res.status(201).json({
      isUpdated : true
    });
  }

  const onError = (err) => {
    console.log('OnError');
    next(err);
  }

  //Hashing and Updating
  Member.findOne({
    attributes : ['mem_pw'],
    where : {
      mem_id : mem_id
    }
  })
  .then(HasingAndUpdating)
  .catch(onError)
}

hashedPassword = (pw) => {
  if(pw){
    const salt = bcrypt.genSaltSync(10); //the cost of processing the data.
    return bcrypt.hashSync(pw, salt); //the data to be encrypted.
  } else {
    throw new Error("Can't find Password");
  }
}
