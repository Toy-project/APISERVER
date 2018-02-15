const sequelize = require('../sequelize.js');
const Sequelize = require('sequelize');

const Category = require('../category/category.model.js');
const Tag = require('../tag/tag.model.js');
const Comment = require('../comment/comment.model.js');
const Sns = require('../sns/sns.model.js');
const Career = require('../career/career.model.js');

// define sequelize club table
const Club = sequelize.define('CLUB', {
  club_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  club_userid: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  club_email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // email check
    },
  },
  club_pw: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  club_name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  club_username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  club_people: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  club_profile_photo: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  club_phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^\d{2,3}-\d{3,4}-\d{4}$/i,
    },
  },
  club_photo: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  club_ex: {
    type: Sequelize.STRING,
  },
  club_copyright: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  club_college: {
    type: Sequelize.STRING,
    // Use career net open api
  },
  cate_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tag_id: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  club_history: {
    type: Sequelize.BLOB, // use editor,
  },
  club_price_duration: {
    type: Sequelize.STRING,
  },
  club_views: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  union_enabled: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '1이면 연합',
  },
  club_rating: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
  club_create_date: {
    type: Sequelize.DATE,
    validate: {
      isDate: true,
    },
  },
  club_last_connect_date: {
    type: Sequelize.DATE,
    validate: {
      isDate: true,
    },
  },
  club_update: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    validate: {
      isDate: true,
    },
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

Club.belongsTo(Category, { foreignKey: 'cate_id', as: 'category' });
Club.belongsTo(Tag, { foreignKey: 'tag_id', as: 'tag' });
Club.hasMany(Sns, { foreignKey: 'club_id', as: 'sns' });
Club.hasMany(Career, { foreignKey: 'club_id', as: 'career' });
Club.hasMany(Comment, { foreignKey: 'club_id' });

module.exports = Club;
