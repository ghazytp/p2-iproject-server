'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Console extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.RentData, {foreignKey: 'ConsoleId'})
    }
  }
  Console.init({
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    rent_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Console',
  });
  return Console;
};