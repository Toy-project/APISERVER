const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require('sequelize');

//Define sequelize comments table
const Comment = sequelize.define('COMMENT', {
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
<<<<<<< HEAD
    allowNull : false
=======
    allowNull : false,
    validate: {
      isDate : true
    }
>>>>>>> 20171226
  },
  mem_id : {
    type : Sequelize.INTEGER,
    allowNull : false,
<<<<<<< HEAD
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
=======
    references: {
      model: 'member',
      key: 'mem_id'
>>>>>>> 20171226
    }
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = Comment;
