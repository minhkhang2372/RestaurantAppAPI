const express = require('express');
const { addRating, getRatingsByRestaurant, getRatingsByUser } = require('../controllers/ratingController');
const router = express.Router();

router.post('/rate', addRating);
router.get('/restaurant/:resId', getRatingsByRestaurant);
router.get('/user/:userId', getRatingsByUser);

module.exports = router;