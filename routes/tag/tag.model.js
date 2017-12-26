const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require("sequelize");

const Club = require(path.join(__dirname, '../model/club.js'));

// define sequelize tag table
const Tag = sequelize.define('TAG', {
  tag_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull : false
  },
  tag_nm: {
    type: Sequelize.STRING,
    allowNull : false
  }
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Tag;
