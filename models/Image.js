const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Image = sequelize.define('Image', {
  hinh_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ten_hinh: DataTypes.STRING,
  duong_dan: DataTypes.STRING,
  mo_ta: DataTypes.STRING,
  nguoi_dung_id: DataTypes.INTEGER
}, { timestamps: false });

module.exports = Image;