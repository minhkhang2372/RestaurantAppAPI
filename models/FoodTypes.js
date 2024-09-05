const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const FoodTypes = sequelize.define('FoodTypes', {
  type_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  type_name: DataTypes.STRING
}, { timestamps: false });

module.exports = FoodTypes;