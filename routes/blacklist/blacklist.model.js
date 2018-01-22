const sequelize = require('../sequelize.js');
const Sequelize = require('sequelize');

// define sequelize blacklist table
const Blacklist = sequelize.define('BLACKLIST', {
  mem_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  black_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Blacklist;
