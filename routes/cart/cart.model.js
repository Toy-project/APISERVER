const sequelize = require('../sequelize.js');
const Sequelize = require('sequelize');

const Member = require('../member/member.model.js');
const Club = require('../club/club.model.js');

const Cart = sequelize.define('CART', {
  cart_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  mem_id: {
    type: Sequelize.INTEGER,
    allowNULL: false,
    references: {
      model: Member,
      key: 'mem_id',
    },
  },
  club_id: {
    type: Sequelize.INTEGER,
    allowNULL: false,
    references: {
      model: Club,
      key: 'club_id',
    },
  },
}, {
  freezeTableName: true,
  timestamps: false, // createdAt, updatedAt 로 생성날짜와 수정날짜 저장.
});

module.exports = Cart;
