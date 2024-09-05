const { Sequelize } = require('sequelize');
const Image = require('../models/Image');
const Comment = require('../models/Comment');
const User = require('../models/Users');

const getImages = async (req, res) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy danh sách ảnh' });
  }
};

const searchImages = async (req, res) => {
  const { name } = req.query;
  try {
    const images = await Image.findAll({
      where: {
        ten_hinh: {
          [Sequelize.Op.like]: `%${name}%`
        }
      }
    });
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi tìm kiếm ảnh' });
  }
};

const getImageInfo = async (req, res) => {
  const { imageId } = req.params;
  try {
    const image = await Image.findByPk(imageId, {
      include: [{ model: User, as: 'user', attributes: ['user_id', 'full_name', 'email'] }]
    });
    if (!image) {
      return res.status(404).json({ error: 'Không tìm thấy ảnh' });
    }
    res.json(image);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy thông tin ảnh' });
  }
};

const getComments = async (req, res) => {
  const { imageId } = req.params;
  try {
    const comments = await Comment.findAll({
      where: { imageId: imageId },
      include: [{ model: User, attributes: ['user_id', 'full_name'] }]
    });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy bình luận' });
  }
};

const addComment = async (req, res) => {
  const { imageId } = req.params;
  const { userId, content } = req.body;
  try {
    const comment = await Comment.create({
      content,
      userId,
      imageId
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi thêm bình luận' });
  }
};

const addImage = async (req, res) => {
  const { ten_hinh, duong_dan, mo_ta, nguoi_dung_id } = req.body;
  try {
    const image = await Image.create({ ten_hinh, duong_dan, mo_ta, nguoi_dung_id });
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi thêm ảnh' });
  }
};

const deleteImage = async (req, res) => {
  const { imageId } = req.params;
  try {
    const result = await Image.destroy({ where: { hinh_id: imageId } });
    if (result === 0) {
      return res.status(404).json({ error: 'Không tìm thấy ảnh để xóa' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi xóa ảnh' });
  }
};

module.exports = {
  getImages,
  searchImages,
  getImageInfo,
  getComments,
  addComment,
  addImage,
  deleteImage
};