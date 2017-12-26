const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require('sequelize');

const Session = sequelize.define('session', {
  session_id : {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull : false
  },
  ip_address: {
    type: Sequelize.INTEGER,
    allowNull : false
  },
  user_agent: {
    type: Sequelize.INTEGER,
    allowNull : false
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = Session;
