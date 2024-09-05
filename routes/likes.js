const express = require('express');
const { likeRestaurant, unlikeRestaurant, getLikesByRestaurant, getLikesByUser } = require('../controllers/likeController');
const router = express.Router();

router.post('/like', likeRestaurant);
router.delete('/unlike', unlikeRestaurant);
router.get('/restaurant/:resId', getLikesByRestaurant);
router.get('/user/:userId', getLikesByUser);

module.exports = router;
