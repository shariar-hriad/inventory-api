const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            min: [3, 'Username must be at least 3 characters'],
            max: [25, 'Username cannot be more than 25 characters'],
            required: true,
        },
        phoneNumber: {
            type: String,
            unique: true,
            required: true,
        },
        totalPurchase: {
            type: Number,
            default: 0,
        },
        address: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
)

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
