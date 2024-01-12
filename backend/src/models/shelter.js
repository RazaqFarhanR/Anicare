'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shelter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shelter.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    contact: DataTypes.STRING,
    description: DataTypes.STRING,
    available_animals: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'shelter',
    tableName: 'shelter'
  });
  return Shelter;
};