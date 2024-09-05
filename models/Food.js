const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Food = sequelize.define('Food', {
  food_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  food_name: DataTypes.STRING,
  image: DataTypes.STRING,
  price: DataTypes.FLOAT,
  desc: DataTypes.STRING,
  type_id: DataTypes.INTEGER
}, { timestamps: false });

module.exports = Food;
