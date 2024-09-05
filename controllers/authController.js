const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/Users');

const register = async (req, res) => {
  const { full_name, email, password } = req.body;
  try {
    const existingUser = await Users.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email đã được sử dụng' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Users.create({ full_name, email, password: hashedPassword });
    res.status(201).json({ message: 'Đăng ký thành công', userId: user.user_id });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Lỗi khi đăng ký người dùng' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Thông tin đăng nhập không hợp lệ' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Lỗi khi đăng nhập' });
  }
};

module.exports = { register, login };