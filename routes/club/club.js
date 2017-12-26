const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Club = require(path.join(__dirname, '../model/club.js'));

const app = express();

// get all club list
router.get('/', function(req, res, next) {
  console.log("get all club list");
  Club.findAll({
    
    })
  .then(results => {
    res.status(200).json(results);
  })
  .catch(err => {
    res.send(err);
  });
});

// get specific_category club list
router.get('/:cate_id', function(req, res, next) {
    console.log("get specific category club list");
    Club.findAll({
      where: {
        category_id : req.params.cate_id
        //??
      },
    })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.send(err);
    });
});

// get specific_name club list
router.get('/:club_nm', function(req, res, next) {
    console.log("get specific name club list");
    Club.findAndCount({
      where: {
        //search
      
      },
    })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.send(err);
    });
});

// get club
router.get('/:club_id', function(req, res, next) {
  console.log("get a specific club");
  Club.find({
    where: {
      club_id: req.params.club_id,
    },
  })
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  });
});

// create club
router.post('/', function(req, res, next) {
  console.log("Create a club");

  Club.create({
    club_id: req.body.club_id,
    mem_id: req.body.mem_id,
    club_photo: req.body.club_photo,
    club_nm:req.body.club_nm,
    club_ex: req.body.club_ex,
    club_copyright: req.body.club.club_copyright,
    club_phone:req.body.club_phone,
    club_email:req.body.club_email,
    club_college:req.body.club_college,
    category_id:req.body.category_id,
    tag_id:req.body.tag_id,
    sns_id:req.body.sns_id,
    club_history:req.body.club_history,
    club_career:req.body.club_career,
    club_price_du:req.body.club_price_du,
    club_view:req.body.club_view,
    uion_enabled:req.body.uion_enabled,
    club_rating:req.body.club_rating,
    updatedAt:req.body.updatedAt
    //...
  })
  .then(result => {
    res.status(201).json(result);
  })
  .catch(err => {
    res.send(err);
  });
});

// delete club
router.delete('/:club_id', function(req, res, next) {
  console.log("Remove a club");
  Member.destroy({
    where: {
      club_id: req.params.club_id
    }
  })
  .then(result => {
    res.send(201);
  })
  .catch(err => {
    res.send(err);
  });
});

// update club
router.put('/:club_id', function(req, res, next) {
  // update list
  let updateList = {
    club_id: req.body.club_id,
    mem_id: req.body.mem_id,
    club_photo: req.body.club_photo,
    club_nm:req.body.club_nm,
    club_ex: req.body.club_ex,
    club_copyright: req.body.club.club_copyright,
    club_phone:req.body.club_phone,
    club_email:req.body.club_email,
    club_college:req.body.club_college,
    category_id:req.body.category_id,
    tag_id:req.body.tag_id,
    sns_id:req.body.sns_id,
    club_history:req.body.club_history,
    club_career:req.body.club_career,
    club_price_du:req.body.club_price_du,
    club_view:req.body.club_view,
    uion_enabled:req.body.uion_enabled,
    club_rating:req.body.club_rating,
    updatedAt:req.body.updatedAt
    //...
  };

  Club.update(updateList, {
    where: {
      club_id: req.params.club_id
    }
  })
  .then(result => {
    res.status(201).json(result);
  });
});

module.exports = router;
