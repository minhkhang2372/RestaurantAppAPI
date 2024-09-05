const LikeRes = require('../models/LikeRes');

const likeRestaurant = async (req, res) => {
  const user_id = req.user.userId;
  const { res_id } = req.body;
  try {
    const existingLike = await LikeRes.findOne({ where: { user_id, res_id } });
    if (existingLike) {
      return res.status(400).json({ error: 'Bạn đã like nhà hàng này rồi' });
    }
    const like = await LikeRes.create({ user_id, res_id, date_like: new Date() });
    res.status(201).json(like);
  } catch (error) {
    console.error('Error liking restaurant:', error);
    res.status(500).json({ error: 'Lỗi khi like nhà hàng' });
  }
};

const unlikeRestaurant = async (req, res) => {
  const user_id = req.user.userId;
  const { res_id } = req.body;
  try {
    const result = await LikeRes.destroy({ where: { user_id, res_id } });
    if (result === 0) {
      return res.status(404).json({ error: 'Không tìm thấy like để xóa' });
    }
    res.status(200).json({ message: 'Đã unlike nhà hàng thành công' });
  } catch (error) {
    console.error('Error unliking restaurant:', error);
    res.status(500).json({ error: 'Lỗi khi unlike nhà hàng' });
  }
};

const getLikesByRestaurant = async (req, res) => {
  const { resId } = req.params;
  try {
    const likes = await LikeRes.findAll({ where: { res_id: resId } });
    res.json(likes);
  } catch (error) {
    console.error('Error fetching likes by restaurant:', error);
    res.status(500).json({ error: 'Lỗi khi lấy danh sách like theo nhà hàng' });
  }
};

const getLikesByUser = async (req, res) => {
  const userId = req.user.userId;
  try {
    const likes = await LikeRes.findAll({ where: { user_id: userId } });
    res.json(likes);
  } catch (error) {
    console.error('Error fetching likes by user:', error);
    res.status(500).json({ error: 'Lỗi khi lấy danh sách like của người dùng' });
  }
};

module.exports = { likeRestaurant, unlikeRestaurant, getLikesByRestaurant, getLikesByUser };