const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Users = sequelize.define('Users', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  full_name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING
}, { timestamps: false });

module.exports = Users;
