const path = require('path');
const Member = require(path.join(__dirname, './member.model.js'));

exports.getAllMember = function(req, res, next) {
  console.log("get all users");

  const respond = (results) => {
    res.status(200).json(results);
  }

  const onError = (err) => {
    res.status(500).json({
      message: err.message
    });
  }

  Member.findAll()
  .then(respond)
  .catch(onError);
}

exports.getMember = function(req, res, next) {
  console.log("get a specific user");

  const mem_id = req.params.mem_id;

  const respond = (results) => {
    res.status(200).json(results);
  }

  const onError = (err) => {
    res.status(500).json({
      message: err.message
    });
  }

  Member.findOneUserByMemId(mem_id)
  .then(respond)
  .catch(onError);
}

exports.register = function(req, res, next) {
  console.log("Create a user");
  const createList = { mem_email, mem_name, mem_pw, mem_phone, mem_type, mem_mail_agree } = req.body;

  const create = (user) => {
    console.log(user);
    if(user){
      throw new Error('mem_email exists');
    } else {
      return Member.createMember(createList);
    }
  }

  const respond = (results) => {
    console.log("respond");
    res.status(200).json(results);
  }

  const onError = (err) => {
    res.status(500).json({
      Message : err.message
    });
  }

  Member.findOneUserByEmail(mem_email)
  .then(create)
  .then(respond)
  .catch(onError)
}

exports.removeMember = (req, res, next) => {
  console.log("Remove a member");
  const mem_id = req.params.mem_id;

  const respond = (results) => {
    res.status(200).json({
      message : "Removed Successfully"
    });
  }

  const onError = (err) => {
    res.status(500).json({
      message: err.message
    });
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

  const respond = (results) => {
    res.status(200).json(results);
  }

  const onError = (err) => {
    res.status(500).json({
      message: err.message
    });
  }

  Member.updateMember(updateList, mem_id)
  .then(respond)
  .catch(onError)
}
