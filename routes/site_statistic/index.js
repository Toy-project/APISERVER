const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Site_statistic = require(path.join(__dirname, './Site_statistic.model.js'));

const app = express();

// get Site_statistic list
router.get('/', function(req,res,next){
  console.log("Get Site_statistic");

  Site_statistic.findAll({
    where: {

    }
  })
  .then(results => {
    res.status(200).json(results);
  })
  .catch(err => {
    res.send(err);
  });
});

//get a specific Site_statistic
router.get('/:id', function(req, res, next){
  console.log("Get a specific site_statistic");

  Site_statistic.find({
    where : {
      ~~
    }
  })
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    res.send(err);
  });
});

//create a site_statistic
router.post('/', function(req, res, next){
  console.log("Create a site statistic");
});

//update a site_statistic
router.put('/:id', function(req, res, next){
  console.log("Update a site statistic");
});

router.delete('/:id', function(req, res, next){
  console.log("Delete a site statistic");
});

module.exports = router;
