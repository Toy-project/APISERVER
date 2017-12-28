const path = require('path');
const mysql = require('mysql');
const db = require(path.join(__dirname, '../config/database.json'));

const Sequelize = require('sequelize');
const sequelize = new Sequelize(db.name, db.user, db.password,{
  host: db.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 5
  },
});

module.exports = sequelize;


//,{operatorAliases: false}
