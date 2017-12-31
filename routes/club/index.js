const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const error = require(path.join(__dirname, '../../helper/errorHandler'));

const router = express.Router();
const Club = require(path.join(__dirname, './club.model.js'));
const Category = require(path.join(__dirname, '../category/category.model.js'));
const Tag = require(path.join(__dirname, '../tag/tag.model.js'));

// get all club list
router.get('/', function(req, res, next) {
  console.log("get all club list");

  Club.findAll({
    where: {
      // todo
    },
  })
  .then(results => {
    res.status(200).json(results);
  })
  .catch(err => {
    next(err);
  });
});

// get a specific club 
router.get('/:club_id', function(req, res, next) {
    console.log("get a specific club");

    Club.findOne({
      where: {
        club_id: req.params.club_id
      },
      include: [
        {
          model: Category,
          as: 'category',
          where: {
            cate_id: req.params.cate_id || req.query.cate_id
          }
        },
        {
          model: Tag,
          as: 'tag',
          where: {
            tag_id: req.params.tag_id || req.query.tag_id
          }
        }
      ]
    })
    .then(result => {
      result ? res.status(200).json(result) : next(error(400));
    })
    .catch(err => {
      next(err);
    });
});

// create club
router.post('/', function(req, res, next) {
  console.log("Create a club");

  Club.findOne({
    where: {
      mem_id: req.body.mem_id
    }
  })
  .then(find => {
    if(!find) {
      Club.create({
        mem_id: req.body.mem_id,
        club_photo: req.body.club_photo,
        club_name: req.body.club_name,
        club_ex: req.body.club_ex,
        club_copyright: req.body.club_copyright,
        club_phone: req.body.club_phone,
        club_email: req.body.club_email,
        club_college: req.body.club_college,
        cate_id: req.body.cate_id,
        tag_id: req.body.tag_id,
        club_history: req.body.club_history || '',
        club_career: req.body.club_career || '',
        club_price_duration: req.body.club_price_duration || '',
        union_enabled: req.body.union_enabled,
        //...
      })
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        next(err);
      })
    }
    else {
      next(error(400));
    }
  })
  .catch(err => {
    next(err);
  });
});

// delete club
router.delete('/:club_id', function(req, res, next) {
  console.log("Remove a club");

  Club.findById(req.params.club_id)
  .then(num => {
    // number (0 or 1)
    if(num) {
      Club.destroy({
        where: {
          club_id: req.params.club_id
        }
      })
      .then(result => {
        res.send(200);
      })
      .catch(err => {
        next(err);
      });
    }
    else {
      next(error(400));
    }
  })
  .catch(err => {
    next(err);
  });
});

// update club
router.put('/:club_id', function(req, res, next) {
  // update list
  let updateList = {
    mem_id: req.body.mem_id,
    club_photo: req.body.club_photo,
    club_name: req.body.club_name,
    club_ex: req.body.club_ex,
    club_copyright: req.body.club_copyright,
    club_phone: req.body.club_phone,
    club_email: req.body.club_email,
    club_college: req.body.club_college,
    cate_id: req.body.cate_id,
    tag_id: req.body.tag_id,
    club_history: req.body.club_history,
    club_career: req.body.club_career,
    club_price_duration: req.body.club_price_du,
    uion_enabled: req.body.uion_enabled,
    //...
  };

  Club.findById(req.params.club_id)
  .then(num => {
    // number (0 or 1)
    if(num) {
      Club.update(updateList, {
        where: {
          club_id: req.params.club_id
        }
      })
      .then(result => {
        // result is number (o or 1)
        // 0: 기존 데이터와 동일
        // 1: 기존 데이터와 달라 업데이트 성공
        res.status(201).json(result);
      })
      .catch(err => {
        next(err);
      });
    }
    else {
      next(error(400));
    }
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;
