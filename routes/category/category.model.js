const sequelize = require('../sequelize.js');
const Sequelize = require('sequelize');

// define sequelize club table
const Category = sequelize.define('CATEGORY', {
  cate_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  cate_name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Category;
