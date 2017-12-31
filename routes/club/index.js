const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Club = require(path.join(__dirname, './club.model.js'));

// const regExpPhone = /^\d{2,3}-\d{3,4}-\d{4}$/; //지역번호가 될 수 있도록

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
        cate_id : req.params.cate_id
      }
      // include:[
      //   {
      //     model:"CATEGORY",
      //     where: {
      //       cate_id : req.params.cate_id
      //     }
      //   }
      // ]
    })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.send(err);
    });
});

//get search result club list
//..

// create club
router.post('/', function(req, res, next) {
  console.log("Create a club");

  Club.create({
    mem_id: req.body.mem_id,
    club_photo: req.body.club_photo,
    club_name:req.body.club_name,
    club_ex: req.body.club_ex,
    club_copyright: req.body.club_copyright,
    club_phone:req.body.club_phone,
    club_email:req.body.club_email,
    club_college:req.body.club_college,
    cate_id:req.body.cate_id,
    tag_id:req.body.tag_id,
    club_history:req.body.club_history,
    club_career:req.body.club_career,
    club_price_duration:req.body.club_price_duration,
    club_views:req.body.club_views,
    union_enabled:req.body.union_enabled,
    club_rating:req.body.club_rating
    //...
  })
  .then(result => {
    res.status(201).json(result);
  })
  .catch(err => {
    res.send(err);
  });
});
//
// delete club
router.delete('/:club_id', function(req, res, next) {
  console.log("Remove a club");
  Club.destroy({
    where: {
      club_id: req.params.club_id
    }
  })
  .then(result => {
    res.send(200);
  })
  .catch(err => {
    res.send(err);
  });
});
//
// update club
router.put('/:club_id', function(req, res, next) {
  // update list
  let updateList = {
    mem_id: req.body.mem_id,
    club_photo: req.body.club_photo,
    club_name:req.body.club_name,
    club_ex: req.body.club_ex,
    club_copyright: req.body.club_copyright,
    club_phone:req.body.club_phone,
    club_email:req.body.club_email,
    club_college:req.body.club_college,
    cate_id:req.body.cate_id,
    tag_id:req.body.tag_id,
    club_history:req.body.club_history,
    club_career:req.body.club_career,
    club_price_duration:req.body.club_price_du,
    club_views:req.body.club_view,
    uion_enabled:req.body.uion_enabled,
    club_rating:req.body.club_rating
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
