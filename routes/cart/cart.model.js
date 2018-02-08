const sequelize = require('../sequelize.js');
const Sequelize = require('sequelize');

const Club = require('../club/club.model');

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
  },
  club_id: {
    type: Sequelize.INTEGER,
    allowNULL: false,
  },
}, {
  freezeTableName: true,
  timestamps: false, // createdAt, updatedAt 로 생성날짜와 수정날짜 저장.
});

Cart.belongsTo(Club, { foreignKey: 'club_id', as: 'club', constraints: false });

module.exports = Cart;
