const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require("sequelize");

const Club = require(path.join(__dirname, '../club/club.model.js'));
const Comment = require(path.join(__dirname, '../comment/comment.model.js'));
const Cart = require(path.join(__dirname, '../cart/cart.model.js'));

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
      console.log(user.mem_pw);
      user.mem_pw = hashedPassword(user.mem_pw);
    },
    beforeUpdate : (user, option) => {
      console.log("Hooking with beforeUpdate");
      const old_pw = user._previousDataValues.mem_pw;

      //console.log(old_pw + " " + user.mem_pw);

      //when false, change the password
      if(!bcrypt.compareSync(user.mem_pw, old_pw)){
        console.log("Password has been changed")
        user.mem_pw = hashedPassword(user.mem_pw);
      }
    }
  }
});

Member.hasMany(Club, {foreignKey: 'mem_id'}); //회원과 단체 1:N 관계
Member.hasMany(Comment, {foreignKey: 'mem_id'});
Member.hasMany(Cart, {foreignKey: 'mem_id'});

Member.findOneUserByEmail = (mem_email) => {
  return Member.findOne({
    where : {
      mem_email : mem_email
    }
  })
}

Member.findOneUserByMemId = (mem_id) => {
  return Member.findOne({
    where : {
      mem_id : mem_id
    }
  })
}

Member.createMember = (createList) => {
  return Member.create({
    mem_email: createList.mem_email,
    mem_name: createList.mem_name,
    mem_pw: createList.mem_pw,
    mem_phone: createList.mem_phone,
    mem_type: createList.mem_type,
    mem_mail_agree: createList.mem_mail_agree,
    mem_last_connect_date: new Date(),
    mem_update: new Date()
    //...
  })
}

Member.updateMember = (updateList, mem_id) => {
  return Member.update(updateList, {
    individualHooks: true,
    where : {
      mem_id : mem_id
    }
  });
}

hashedPassword = (pw) => {
  if(pw){
    const salt = bcrypt.genSaltSync(10); //the cost of processing the data.
    return bcrypt.hashSync(pw, salt); //the data to be encrypted.
  } else {
    throw new Error("Can't find user");
  }
}

module.exports = Member;
