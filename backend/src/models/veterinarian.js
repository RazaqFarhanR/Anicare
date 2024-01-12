'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veterinarian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Veterinarian.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    firebase_uid: DataTypes.STRING,
    name: DataTypes.STRING,
    specialization: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'veterinarian',
    tableName: 'veterinarian',
  });
  return Veterinarian;
};