const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require("sequelize");

const Category = require(path.join(__dirname, '../category/category.model.js'));
const Member = require(path.join(__dirname, '../member/member.model.js'));
const Tag = require(path.join(__dirname, '../tag/tag.model.js'));
const Cart = require(path.join(__dirname, '../cart/cart.model.js'));
const Comment = require(path.join(__dirname, '../comment/comment.model.js'));
const Sns = require(path.join(__dirname, '../sns/sns.model.js'));

// define sequelize club table
const Club = sequelize.define('CLUB', {
  club_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  club_email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  club_pw: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  club_name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  club_profile_photo: {
    type: Sequelize.STRING
  },
  club_phone: {
    type: Sequelize.STRING,
    validate: {
      is: /^\d{2,3}-\d{3,4}-\d{4}$/i
    }
  },
  club_photo: {
    type: Sequelize.STRING
  },
  club_ex: {
      type: Sequelize.STRING,
      allowNull: false
  },
  club_copyright: {
      type: Sequelize.STRING,
      allowNull: false
  },
  club_college: {
    type: Sequelize.STRING,
    allowNull: false
    // Use career net open api
  },
  cate_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'cate_id'
    }
  },
  tag_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Tag,
      key: 'tag_id'
    }
  },
  club_history: {
    type: Sequelize.BLOB, //use editor,
    get(){
      return this.getDataValue('club_history').toString('utf8');
    }
  },
  club_price_duration: {
    type: Sequelize.STRING
  },
  club_views: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  union_enabled: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '1이면 연합'
  },
  club_rating: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  club_update: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    validate : {
      isDate: true
    }
  }
}, {
  freezeTableName: true,
  timestamps : false //createdAt, updatedAt 로 생성날짜와 수정날짜 저장.
});

Club.belongsTo(Category, {foreignKey: 'cate_id', as: 'category'});
Club.belongsTo(Tag, {foreignKey: 'tag_id', as: 'tag'});
Club.hasMany(Cart, {foreignKey: 'club_id'});
Club.hasMany(Comment, {foreignKey: 'club_id'});
Club.hasMany(Sns, {foreignKey: 'club_id', as: 'sns'});

module.exports = Club;
