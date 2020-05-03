'use strict';

const { encryptPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Email cannot be empty'
        },
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password cannot be empty'
        }
      }
    },
    admin: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeSave: (ins, opt) => {
        ins.password = encryptPassword(ins.password)
        if (!ins.admin) ins.admin = false
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};