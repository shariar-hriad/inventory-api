const asyncHandler = require('express-async-handler')
const Order = require('../../models/order/order.model')
const Cart = require('../../models/cart/cart.model')
const Product = require('../../models/product.model')

// Add item to cart
const addItemToCart = asyncHandler(async (req, res, next) => {
    const { productId, quantity } = req.body
    try {
        const product = await Product.findById(productId)
        if (!product)
            return res.status(404).json({
                message: 'Product not found',
            })

        if (product.quantity < quantity)
            return res.status(400).json({
                message: 'Insufficient stock',
            })

        let cart = await Cart.findOne()

        if (!cart) {
            cart = new Cart({ items: [] })
        }

        const itemIndex = cart.items.findIndex((item) => {
            return item.productId.toString() === productId
        })

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity
        } else {
            cart.items.push({ productId, quantity })
        }

        await cart.save()

        return res.status(200).json(cart)
    } catch (error) {
        return next(error)
    }
})

// Create order for customer
const createOrder = asyncHandler(async (req, res, next) => {
    const { customerName } = req.body
    try {
        let cart = await Cart.findOne()
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                message: 'Cart is empty',
            })
        }

        let totalAmount = 0

        for (const item of cart.items) {
            const product = await Product.findById(item.productId)
            if (!product)
                return res.status(404).json({
                    message: `Product with ID ${item.productId} not found`,
                })

            if (product.quantity < item.quantity) {
                return res.status(400).json({
                    message: `Insufficient stock for product ${product.name}`,
                })
            }

            product.quantity -= item.quantity
            totalAmount += product.price * item.quantity

            await product.save()
        }

        const order = await Order.create({
            customerName,
            items: cart.items,
            totalAmount,
        })

        await Cart.deleteOne() // Empty the cart
        res.status(201).json(order)
    } catch (error) {
        return next(error)
    }
})

module.exports = { addItemToCart, createOrder }
