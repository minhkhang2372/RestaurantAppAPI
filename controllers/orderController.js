const Orders = require('../models/Orders');

const createOrder = async (req, res) => {
  const user_id = req.user.userId;
  const { food_id, amount, code, arr_sub_id } = req.body;
  try {
    const order = await Orders.create({ user_id, food_id, amount, code, arr_sub_id });
    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Lỗi khi tạo đơn hàng' });
  }
};

const getOrdersByUser = async (req, res) => {
  const userId = req.user.userId;
  try {
    const orders = await Orders.findAll({ where: { user_id: userId } });
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Lỗi khi lấy danh sách đơn hàng' });
  }
};

module.exports = { createOrder, getOrdersByUser };