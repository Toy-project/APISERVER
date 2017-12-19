const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require("sequelize");
// define sequelize user table
const Member = sequelize.define('member', {
  mem_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mem_email: {
    type: Sequelize.STRING
  },
  mem_name: {
    type: Sequelize.STRING
  },
  mem_password: {
    type: Sequelize.STRING
  },
  mem_phone: {
    type: Sequelize.STRING
  },
  mem_type: {
    type: Sequelize.INTEGER
  },
  mem_mail_agree: {
    type: Sequelize.INTEGER
  },
  mem_last_connect_date: {
    type: Sequelize.DATE
  },
  mem_update: {
    type: Sequelize.DATE
  }

}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Member;
