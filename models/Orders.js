const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Orders = sequelize.define('Orders', {
  order_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: DataTypes.INTEGER,
  food_id: DataTypes.INTEGER,
  amount: DataTypes.INTEGER,
  code: DataTypes.STRING,
  arr_sub_id: DataTypes.STRING
}, { timestamps: false });

module.exports = Orders;        