const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require("sequelize");

const Club = require(path.join(__dirname, '../model/club.js'));

// define sequelize club table
const Category = sequelize.define('CATEGORY', {
  cate_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull : false
  },
  cate_nm: {
    type: Sequelize.STRING,
    allowNull : false
  }
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Category;
