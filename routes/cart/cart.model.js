const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require("sequelize");

const Cart = sequelize.define('CART', {
  cart_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  mem_id: {
    type: Sequelize.INTEGER,
    allowNULL: false,
    references : {
      model:'member',
      key:'mem_id'
    }
  },
  club_id: {
    type: Sequelize.INTEGER,
    allowNULL: false,
    references : {
      model:'club',
      key:'club_id'
    }
  }
}, {
  freezeTableName: true,
  timestamps : false //createdAt, updatedAt 로 생성날짜와 수정날짜 저장.
});

module.exports = Cart;
