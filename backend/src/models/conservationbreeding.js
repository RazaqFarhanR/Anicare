'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConservationBreeding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConservationBreeding.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    protected_species_info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'conservationBreeding',
    tableName: 'conservationBreeding',
  });
  return ConservationBreeding;
};