const sequelize = require('../sequelize.js');
const Sequelize = require('sequelize');

const Career = sequelize.define('CAREER', {
  career_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  career_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  career_ex: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  career_photo: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  career_due_start: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  career_due_end: {
    type: Sequelize.DATE,
  },
  career_people: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  career_co: {
    type: Sequelize.STRING,
    defaultValue: 1,
  },
  club_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Career;
