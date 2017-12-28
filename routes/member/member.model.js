const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require("sequelize");
// define sequelize user table
const Member = sequelize.define('MEMBER', {
  mem_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull : false
  },
  mem_email: {
    type: Sequelize.STRING,
    allowNull : false,
    unique: true,
    validate : {
      isEmail : true, // email check
      notEmpty: {
        msg: 'not empty'
      }
    }
  },
  mem_name: {
    type: Sequelize.STRING,
    allowNull : false,
    validate : {
      notEmpty: {
        msg: 'not empty'
      }
    }
  },
  mem_pw: {
    type: Sequelize.STRING,
    allowNull : false,
    validate : {
      notEmpty: {
        msg: 'not empty'
      }
    }
  },
  mem_phone: {
    type: Sequelize.STRING,
    allowNull : false,
    validate : {
      is : /^\d{3}-\d{4}-\d{4}$/i,
      notEmpty: {
        msg: 'not empty'
      }
    }
  },
  mem_type: {
    type: Sequelize.INTEGER,
    allowNull : false
  },
  mem_mail_agree: {
    type: Sequelize.INTEGER,
    allowNull : false
  },
  mem_last_connect_date: {
    type: Sequelize.DATE,
    validate : {
      isDate: true
    }
  },
  mem_update: {
    type: Sequelize.DATE,
    validate : {
      isDate: true
    }
  }

}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Member;
