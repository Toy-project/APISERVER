const path = require('path');
const mysql = require('mysql');
const db = require(path.join(__dirname, '../config/database.json'));

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

//db['CLUB'] = sequelize.import(path.join(__dirname, '/models/club.js'));

//foreignKey 
db.CLUB.hasMany(db.CATEGORY, {foreignKey: 'category_id'});
db.CLUB.hasMany(db.SNS,{foreignKey:'sns_id'});
db.CLUB.hasMany(db.TAG,{foreignKey:'tag_id'});
db.Member.hasMany(db.CLUB,{foreignKey:'mem_id'});

module.exports = sequelize;
