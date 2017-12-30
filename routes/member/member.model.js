const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require("sequelize");

const bcrypt = require('bcrypt');

// define sequelize user table
const Member = sequelize.define('MEMBER', {
  mem_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull : false
  },
  mem_email: {
    type: Sequelize.STRING,
    allowNull : false,
    unique: true,
    validate : {
      isEmail : true, // email check
      notEmpty: {
        msg: 'not empty'
      }
    }
  },
  mem_name: {
    type: Sequelize.STRING,
    allowNull : false,
    validate : {
      notEmpty: {
        msg: 'not empty'
      }
    }
  },
  mem_pw: {
    type: Sequelize.STRING,
    allowNull : false,
    validate : {
      notEmpty: {
        msg: 'not empty'
      }
    }
  },
  mem_phone: {
    type: Sequelize.STRING,
    allowNull : false,
    validate : {
      is : /^\d{3}-\d{4}-\d{4}$/i,
      notEmpty: {
        msg: 'not empty'
      }
    }
  },
  mem_type: {
    type: Sequelize.INTEGER,
    allowNull : false
  },
  mem_mail_agree: {
    type: Sequelize.INTEGER,
    allowNull : false
  },
  mem_last_connect_date: {
    type: Sequelize.DATE,
    validate : {
      isDate: true
    }
  },
  mem_update: {
    type: Sequelize.DATE,
    validate : {
      isDate: true
    }
  }

}, {
  freezeTableName: true,
  timestamps: false,
  hooks: {
    beforeCreate: (user, option) => {
      console.log("Hooking with beforeCreate");
      //encrypting data.
      console.log(user);
      user.mem_pw = hashedPassword(user.mem_pw);
    },
    beforeUpdate : (user, option) => {
      console.log("Hooking with beforeUpdate");
      user.mem_pw = hashedPassword(user.mem_pw);
    }
  }
});

Member.findOneUserByEmail = (mem_email) => {
  return Member.findOne({
    where : {
      mem_email : mem_email
    }
  })
}

hashedPassword = (pw) => {
  if(user){
    const salt = bcrypt.genSaltSync(10); //the cost of processing the data.
    return bcrypt.hashSync(pw, salt); //the data to be encrypted.
  } else {
    throw new Error("Can't find user");
  }
}

module.exports = Member;
