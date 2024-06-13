const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    items: [
        {
            productId: mongoose.Schema.Types.ObjectId,
            quantity: Number,
        },
    ],
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart
