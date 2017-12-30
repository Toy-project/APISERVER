const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require("sequelize");

// define sequelize club table
const Category = sequelize.define('CATEGORY', {
  cate_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull : false
  },
  cate_name: {
    type: Sequelize.STRING,
    allowNull : false,
    unique: true
  }
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Category;
