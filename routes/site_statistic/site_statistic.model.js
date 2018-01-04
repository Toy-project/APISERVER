const sequelize = require('../sequelize.js');
const Sequelize = require('sequelize');

const SiteStatistic = sequelize.define('SITE_STATISTIC', {
  date: {
    type: Sequelize.DATEONLY,
    primaryKey: true,
    allowNull: false,
  },
  site_connect_count: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  site_pc_connect_count: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  site_mobile_connect_count: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = SiteStatistic;
