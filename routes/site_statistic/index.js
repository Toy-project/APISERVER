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

module.exports = router;
