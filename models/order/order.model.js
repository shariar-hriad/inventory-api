const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {
        customerName: String,
        items: [
            {
                productId: mongoose.Schema.Types.ObjectId,
                quantity: Number,
            },
        ],
        totalAmount: Number,
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        timestamps: true,
    }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
