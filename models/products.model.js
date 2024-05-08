const { Schema, model } = require('mongoose')

const productsSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter product name'],
            trim: true,
        },
        slug: {
            type: String,
            required: [true, 'Please enter product slug'],
            lowercase: true,
        },
        description: {
            type: String,
            required: [true, 'Please enter product description'],
            trim: true,
        },
        price: {
            type: Number,
            required: [true, 'Please enter product price'],
            maxLength: [8, 'Price cannot exceed 8 characters'],
        },
        discount: {
            type: Number,
            default: 0,
        },
        ratings: {
            type: Number,
            default: 0,
        },
        images: [
            {
                public_id: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
            },
        ],
        category: {
            type: String,
            required: [true, 'Please enter product category'],
        },
        stock: {
            type: Number,
            required: [true, 'Please enter product stock'],
            maxLength: [4, 'Stock cannot exceed 4 characters'],
            default: 1,
        },
        user: {
            type: Schema.ObjectId,
            ref: 'User',
            required: true,
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

const Products = model('Products', productsSchema)

module.exports = Products
