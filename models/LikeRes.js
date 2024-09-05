const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const LikeRes = sequelize.define('LikeRes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: DataTypes.INTEGER,
  res_id: DataTypes.INTEGER,
  date_like: DataTypes.DATE
}, { timestamps: false });

module.exports = LikeRes;