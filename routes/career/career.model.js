const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require("sequelize");

const Career = sequelize.define('CAREER', {
    career_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    career_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    career_ex: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    career_photo: {
        type: Sequelize.STRING,
    },
    career_due: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    club_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Club,
          key: 'club_id'
        }
    }
}, {
    freezeTableName: true
});