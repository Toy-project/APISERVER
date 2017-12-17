const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const swaggerUi = require('swagger-ui-express');

const mysql = require('mysql');
const db = require(path.join(__dirname, '../../config/database.json'));

const Sequelize = require("sequelize");
const sequelize = new Sequelize(db.name, db.user, db.password, {
  host: db.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 5
  },
});

const app = express();

// define sequelize user table
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false,
});

// get user list
router.get('/', function(req, res, next) {
  User.findAll({
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
router.get('/:email', function(req, res, next) {
  User.find({
    where: {
      email: req.params.email,
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
  User.create({
    email: req.body.email,
    name: req.body.name,
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
router.delete('/:email', function(req, res, next) {
  User.destroy({
    where: {
      email: req.params.email,
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
router.put('/:email', function(req, res, next) {
  // update list
  let updateList = {
    email: req.body.email,
    name: req.body.name,
    //...
  };

  User.update(updateList, {
    where: {
      email: req.params.email,
    }
  })
  .then(result => {
    res.status(201).json(result);
  });
});

module.exports = router;