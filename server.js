const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth');
const likeRoutes = require('./routes/likes');
const ratingRoutes = require('./routes/ratings');
const orderRoutes = require('./routes/orders');
const imageRoutes = require('./routes/images');
const { sequelize } = require('./config/db');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'frontend')));

const authenticateJWT = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log('Auth Header:', authHeader);

  if (!authHeader) return res.status(401).json({ error: 'Không có token, quyền truy cập bị từ chối' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token không hợp lệ' });

  try {
    console.log('JWT_SECRET:', process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('JWT verification error:', error);
    res.status(401).json({ error: 'Token không hợp lệ', details: error.message });
  }
};

// Routes
app.use('/auth', authRoutes);
app.use('/likes', authenticateJWT, likeRoutes);
app.use('/ratings', authenticateJWT, ratingRoutes);
app.use('/orders', authenticateJWT, orderRoutes);
app.use('/images', authenticateJWT, imageRoutes);

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Khởi động server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
  });
}).catch(err => {
  console.error('Không thể kết nối đến cơ sở dữ liệu:', err);
});

module.exports = app;