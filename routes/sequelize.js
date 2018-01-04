const db = require('../config/database.json');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(db.name, db.user, db.password, {
  host: db.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 5,
  },
  define: {
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
  },
});

module.exports = sequelize;
