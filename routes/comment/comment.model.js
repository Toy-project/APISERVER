const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require('sequelize');

//Define sequelize comments table
const Comment = sequelize.define('COMMENT', {
  comment_id : {
    type : Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement : true
  },
  comment_contents : {
    type : Sequelize.STRING
  },
  comment_update : {
    type : Sequelize.DATE,

  },
  mem_id : {
    type : Sequelize.INTEGER
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = Comment;
