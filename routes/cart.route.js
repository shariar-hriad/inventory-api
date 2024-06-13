const express = require('express')
const { protect, authorize } = require('../middleware/auth.middleware.js')
const {
    addItemToCart,
    createOrder,
} = require('../controllers/order/order.controller')

const cartRoute = express.Router()

cartRoute.post('/add', protect, authorize('admin'), addItemToCart)

cartRoute.post('/create-order', protect, authorize('admin'), createOrder)

module.exports = cartRoute
