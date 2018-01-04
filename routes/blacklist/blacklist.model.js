const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require("sequelize");

const Member = require(path.join(__dirname, '../member/member.model'));

// define sequelize club table
const Blacklist = sequelize.define('BLACKLIST', {
  mem_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull : false,
    references: {
      model: Member,
      key: 'mem_id'
    }
  },
  black_type: {
    type: Sequelize.STRING,
    allowNull : false
  }
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Blacklist;
