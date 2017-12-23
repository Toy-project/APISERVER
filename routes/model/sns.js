const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require("sequelize");

const Club = require(path.join(__dirname, '../model/club.js'));

// define sequelize sns table
const Sns = sequelize.define('SNS', {
  sns_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull : false,
    references: {model:Club, key: 'sns_id'}
  },
  sns_nm: {
    type: Sequelize.STRING,
    allowNull : false
  },
  sns_url: {
    type: Sequelize.STRING,
    allowNull : false
  }
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Sns;
