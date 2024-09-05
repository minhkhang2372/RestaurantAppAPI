const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const RateRes = sequelize.define('RateRes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: DataTypes.INTEGER,
  res_id: DataTypes.INTEGER,
  amount: DataTypes.INTEGER,
  date_rate: DataTypes.DATE
}, { timestamps: false });

module.exports = RateRes;