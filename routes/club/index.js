const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Club = require(path.join(__dirname, './club.model.js'));
const Member = require(path.join(__dirname,'../member/member.model.js'));
const Tag = require(path.join(__dirname,'../Tag/tag.model.js'));
const Category = require(path.join(__dirname,'../Category/category.model.js'));

const app = express();

var regExpPhone = /^\d{2,3}-\d{3,4}-\d{4}$/; //지역번호가 될 수 있도록

Member.hasMany(Club, {foreignKey: 'mem_id'}); //회원과 단체 1:N 관계
Tag.hasMany(Club,{foreignKey:'tag_id'}); 
Category.hasMany(Club,{foreignKey:'cate_id'}); 

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
      }
      // include:[
      //   {
      //     model:"CATEGORY",
      //     where: {
      //       category_id : req.params.cate_id 
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
  Club.findOne({
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
  Club.destroy({
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
