const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require('sequelize');
const Member = require('./member.js');

//Define sequelize comments table
const Comments = sequelize.define('COMMENT', {
  comment_id : {
    type : Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement : true,
    allowNull : false
  },
  comment_contents : {
    type : Sequelize.STRING,
    allowNull : false
  },
  comment_update : {
    type : Sequelize.DATE,
    allowNull : false
  },
  mem_id : {
    type : Sequelize.INTEGER,
    allowNull : false,
    references : {
      model:'MEMBER',
      key:'mem_id'
    }
  },
  club_id : {
    type : Sequelize.INTEGER,
    allowNull : false,
    references : {
      model:'CLUB',
      key:'club_id'
    }
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = Comments;
