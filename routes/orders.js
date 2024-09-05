const express = require('express');
const { createOrder, getOrdersByUser } = require('../controllers/orderController');
const router = express.Router();

router.post('/order', createOrder);
router.get('/user/:userId', getOrdersByUser);

module.exports = router;