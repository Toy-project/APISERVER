const sequelize = require('../sequelize.js');
const Sequelize = require('sequelize');

// define sequelize tag table
const Tag = sequelize.define('TAG', {
  tag_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  tag_name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Tag;
