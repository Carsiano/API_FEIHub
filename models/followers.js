'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Followers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Followers.init({
    follower:{
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      references: {
        model: 'Credentials',
        key: 'username',
        UPDATE: 'CASCADE'
      }
    },
    following: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'Credentials',
        key: 'username',
        UPDATE: 'CASCADE'
      }
    }
  }, {
    sequelize,
    modelName: 'Followers',
  });
  return Followers;
};