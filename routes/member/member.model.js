const sequelize = require('../sequelize.js');
const Sequelize = require('sequelize');

const Cart = require('../cart/cart.model.js');
const Blacklist = require('../blacklist/blacklist.model.js');

// define sequelize user table
const Member = sequelize.define('MEMBER', {
  mem_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  mem_userid: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  mem_email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true, // email check
    },
  },
  mem_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mem_profile_photo: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  mem_pw: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mem_phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^\d{2,3}-\d{3,4}-\d{4}$/i,
    },
  },
  mem_mail_agree: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  mem_create_date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
  mem_last_connect_date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
  mem_update: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

Member.hasOne(Blacklist, { foreignKey: 'mem_id' });
Member.hasMany(Cart, { foreignKey: 'mem_id' });

module.exports = Member;
