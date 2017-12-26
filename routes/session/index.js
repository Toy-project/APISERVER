const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Session = require(path.join(__dirname, './session.model.js'));

const app = express();

// get session list
router.get('/', function(req, res, next) {
  console.log("get all users");
  Session.findAll({
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

// get a session
router.get('/:id', function(req, res, next) {
  console.log("get a session");
  Session.find({
    where: {
      session_id: req.params.id,
    },
  })
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  });
});

// create session
router.post('/', function(req, res, next) {
  console.log("Create a session");

  Session.create({
    ip_address: req.body.ip_address,
    user_agent: req.body.user_agent
    //...
  })
  .then(result => {
    res.status(201).json(result);
  })
  .catch(err => {
    res.send(err);
  });
});

// delete session
router.delete('/:id', function(req, res, next) {
  console.log("Remove a session");
  Session.destroy({
    where: {
      session_id: req.params.id,
    }
  })
  .then(result => {
    res.send(201);
  })
  .catch(err => {
    res.send(err);
  });
});

// update session
router.put('/:id', function(req, res, next) {
  // update list
  let updateList = {
    ip_address: req.body.ip_address,
    user_agent: req.body.user_agent
    //...
  };

  Session.update(updateList, {
    where: {
      session_id: req.params.id,
    }
  })
  .then(result => {
    res.status(201).json(result);
  });
});

module.exports = router;
