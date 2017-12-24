const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require('sequelize');

// define sequelize user table
const Member = sequelize.define('member', {
  mem_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mem_email: {
    type: Sequelize.STRING,
    validate : {
      isEmail : true, // email check
      notEmpty: {
        msg: 'not empty'
      }
    }
  },
  mem_name: {
    type: Sequelize.STRING,
    validate : {
      notEmpty: {
        msg: 'not empty'
      }
    }
  },
  mem_pw: {
    type: Sequelize.STRING,
    validate : {
      notEmpty: {
        msg: 'not empty'
      }
    }
  },
  mem_phone: {
    type: Sequelize.STRING,
    validate : {
      is : /^\d{3}-\d{4}-\d{4}$/i,
      notEmpty: {
        msg: 'not empty'
      }
    }
  },
  mem_type: {
    type: Sequelize.INTEGER
  },
  mem_mail_agree: {
    type: Sequelize.INTEGER
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
