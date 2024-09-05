const express = require('express');
const {
  getImages,
  searchImages,
  getImageInfo,
  getComments,
  addComment,
  addImage,
  deleteImage
} = require('../controllers/imageController');
const router = express.Router();

router.get('/', getImages);
router.get('/search', searchImages);
router.get('/:imageId', getImageInfo);
router.get('/:imageId/comments', getComments);
router.post('/:imageId/comments', addComment);
router.post('/', addImage);
router.delete('/:imageId', deleteImage);

module.exports = router;