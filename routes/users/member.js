const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Member = require(path.join(__dirname, '/model/member.js'));

const app = express();

// get user list
router.get('/', function(req, res, next) {
  console.log("get all users");
  Member.findAll({
    where: {
      // todo
    },
  })
  .then(results => {
    res.status(200).json(results);
  })
  .catch(err => {
    res.send(err);
  });
});

// get user
router.get('/:id', function(req, res, next) {
  console.log("get a specific user");
  Member.find({
    where: {
      mem_id: req.params.id,
    },
  })
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  });
});

// create user
router.post('/', function(req, res, next) {
  console.log("Create a user");
  Member.create({
    mem_email: req.body.email,
    mem_name: req.body.name,
    mem_password: req.body.pw,
    mem_phone: req.body.phone,
    mem_type: req.body.type,
    mem_mail_agree: req.body.mail_agree,
    mem_last_connect_date: req.body.lcd,
    mem_update: req.body.update
    //...
  })
  .then(result => {
    res.status(201).json(result);
  })
  .catch(err => {
    res.send(err);
  });
});

// delete user
router.delete('/:id', function(req, res, next) {
  console.log("Remove a user");
  Member.destroy({
    where: {
      mem_id: req.params.id,
    }
  })
  .then(result => {
    res.send(201);
  })
  .catch(err => {
    res.send(err);
  });
});

// update user
router.put('/:id', function(req, res, next) {
  // update list
  let updateList = {
    mem_email: req.body.email,
    mem_name: req.body.name,
    mem_password: req.body.pw,
    mem_phone: req.body.phone,
    mem_type: req.body.type,
    mem_mail_agree: req.body.mail_agree,
    mem_last_connect_date: req.body.lcd,
    mem_update: req.body.update
    //...
  };

  Member.update(updateList, {
    where: {
      mem_id: req.params.id,
    }
  })
  .then(result => {
    res.status(201).json(result);
  });
});

module.exports = router;
