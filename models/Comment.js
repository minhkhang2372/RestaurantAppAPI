const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./Users');
const Image = require('./Image');

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id'
    }
  },
  imageId: {
    type: DataTypes.INTEGER,
    references: {
      model: Image,
      key: 'hinh_id'
    }
  }
}, {
  timestamps: true
});

Comment.belongsTo(User, { foreignKey: 'userId' });
Comment.belongsTo(Image, { foreignKey: 'imageId' });

module.exports = Comment;