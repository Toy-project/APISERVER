const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Comment = require(path.join(__dirname, './comment.model.js'));

const app = express();

// get a comment
router.get('/:id', function(req, res, next){
  console.log("get a comment");
  Comment.findAll({
    where : {
      mem_id :req.params.id
    }
  })
  .then(result=>{
    res.send(result);
  })
  .catch(err=>{
    res.send(err);
  });
});

// create a comment
router.post('/:id', function(req, res, next){
  console.log("Create a comment");

  Comment.create({
    comment_contents : req.body.coments,
    comment_update : req.body.createAt,
    mem_id : req.params.id
  })
  .then(result=>{
    res.send(result);
  })
  .catch(err=>{
    res.send(err);
  });
});

router.put('/:id', function(req, res, next){
  console.log("Update a comment");

  let updateList = {
    comment_contents : req.body.contents
  }

  Comment.update(updateList, {
    where: {
      comment_id: req.params.id,
    }
  })
  .then(result => {
    res.status(201).json(result);
  })
  .catch(err => {
    res.send(err);
  });
});

router.delete('/:id', function(req, res, next){
  console.log("Delete a comment");

  Comment.destroy({
    where : {
      comment_id: req.params.id
    }
  })
  .then(result => {
    res.send(201);
  })
  .catch(err => {
    res.send(err);
  });
})

module.exports = router;
