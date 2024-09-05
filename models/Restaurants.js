const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Restaurants = sequelize.define('Restaurants', {
  res_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  res_name: DataTypes.STRING,
  image: DataTypes.STRING,
  desc: DataTypes.STRING
}, { timestamps: false });

module.exports = Restaurants;