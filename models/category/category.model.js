const { Schema, model } = require('mongoose')
const slugify = require('slugify')

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        slug: {
            type: String,
            unique: true,
        },
        description: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        timestamps: true,
    }
)

categorySchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true })
    next()
})

const Category = model('Category', categorySchema)

module.exports = Category
