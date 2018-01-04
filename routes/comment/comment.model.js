const sequelize = require('../sequelize.js');
const Sequelize = require('sequelize');

const Member = require('../member/member.model.js');
const Club = require('../club/club.model.js');

// Define sequelize comments table
const Comment = sequelize.define('COMMENT', {
  comment_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  comment_contents: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  club_rating: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  comment_update: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
  mem_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Member,
      key: 'mem_id',
    },
  },
  club_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Club,
      key: 'club_id',
    },
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Comment;
