const RateRes = require('../models/RateRes');

const addRating = async (req, res) => {
  const user_id = req.user.userId;
  const { res_id, amount } = req.body;
  try {
    const existingRating = await RateRes.findOne({ where: { user_id, res_id } });
    if (existingRating) {
      existingRating.amount = amount;
      existingRating.date_rate = new Date();
      await existingRating.save();
      return res.json(existingRating);
    }
    const rating = await RateRes.create({ user_id, res_id, amount, date_rate: new Date() });
    res.status(201).json(rating);
  } catch (error) {
    console.error('Error adding rating:', error);
    res.status(500).json({ error: 'Lỗi khi thêm đánh giá' });
  }
};

const getRatingsByRestaurant = async (req, res) => {
  const { resId } = req.params;
  try {
    const ratings = await RateRes.findAll({ where: { res_id: resId } });
    res.json(ratings);
  } catch (error) {
    console.error('Error fetching ratings by restaurant:', error);
    res.status(500).json({ error: 'Lỗi khi lấy danh sách đánh giá theo nhà hàng' });
  }
};

const getRatingsByUser = async (req, res) => {
  const userId = req.user.userId;
  try {
    const ratings = await RateRes.findAll({ where: { user_id: userId } });
    res.json(ratings);
  } catch (error) {
    console.error('Error fetching ratings by user:', error);
    res.status(500).json({ error: 'Lỗi khi lấy danh sách đánh giá của người dùng' });
  }
};

module.exports = { addRating, getRatingsByRestaurant, getRatingsByUser };