const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Sns = require(path.join(__dirname, './sns.model.js'));

const app = express();

// get all sns list
router.get('/', function(req, res, next) {
  console.log("get all sns list");
  Sns.findAll({
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

// get specific club all sns list
router.get('/:club_id', function(req, res, next) {
    console.log("get all sns list");
    Sns.findAll({
      where: {
        club_id : req.params.cate_id
      },
    })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.send(err);
    });
  });

// get one sns 
router.get('/:sns_id', function(req, res, next) {
  console.log("get a specific club");
  Sns.find({
    where: {
        sns_id: req.params.sns_id,
    },
  })
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  });
});

// create Sns table
router.post('/', function(req, res, next) {
  console.log("Create a club");

  Sns.create({
    sns_id: req.body.sns_id,
    sns_nm: req.body.sns_nm,
    sns_url: req.body.sns_url,
    club_id: req.body.club_id
    //...
  })
  .then(result => {
    res.status(201).json(result);
  })
  .catch(err => {
    res.send(err);
  });
});

// delete Sns
router.delete('/:sns_id', function(req, res, next) {
  console.log("Remove a user");
  Sns.destroy({
    where: {
      sns_id: req.params.sns_id
    }
  })
  .then(result => {
    res.send(201);
  })
  .catch(err => {
    res.send(err);
  });
});

// update Sns
router.put('/:id', function(req, res, next) {
  // update list
  let updateList = {
    sns_id: req.body.sns_id,
    sns_nm: req.body.sns_nm,
    sns_url: req.body.sns_url,
    club_id: req.body.club_id
    //...
  };

  Sns.update(updateList, {
    where: {
      sns_id: req.params.sns_id,
    }
  })
  .then(result => {
    res.status(201).json(result);
  });
});

module.exports = router;
