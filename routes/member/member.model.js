const sequelize = require('../sequelize.js');
const Sequelize = require('sequelize');

const Comment = require('../comment/comment.model.js');
const Cart = require('../cart/cart.model.js');

// define sequelize user table
const Member = sequelize.define('MEMBER', {
  mem_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  mem_email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // email check
    },
  },
  mem_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'not empty',
      },
    },
  },
  mem_profile_photo: {
    type: Sequelize.STRING,
  },
  mem_pw: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'not empty',
      },
    },
  },
  mem_phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^\d{3}-\d{4}-\d{4}$/i,
      notEmpty: {
        msg: 'not empty',
      },
    },
  },
  mem_mail_agree: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  mem_last_connect_date: {
    type: Sequelize.DATE,
    validate: {
      isDate: true,
    },
  },
  mem_update: {
    type: Sequelize.DATE,
    validate: {
      isDate: true,
    },
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

Member.hasMany(Comment, { foreignKey: 'mem_id' });
Member.hasMany(Cart, { foreignKey: 'mem_id' });

module.exports = Member;
