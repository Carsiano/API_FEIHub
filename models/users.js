'use strict';
const {
  Model
} = require('sequelize');
const credentials = require('./credentials');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      primaryKey: true,
      references: {
        model: 'Credentials',
        key: 'username',
        UPDATE: 'CASCADE'
      }
    },
    name:  {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    paternalSurname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    maternalSurname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    schoolId: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    educationalProgram:{
      type: DataTypes.STRING(50),
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};