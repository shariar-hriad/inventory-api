const { body, param } = require('express-validator')
const {} = require('mongoose')

const createProductValidation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Please enter a product name')
        .isLength({ min: 5, max: 40 })
        .withMessage('Product name should be between 5 and 40 characters'),

    body('slug').trim().notEmpty().withMessage('Please enter a product slug'),

    body('description')
        .trim()
        .notEmpty()
        .withMessage('Please enter a product description')
        .isLength({ min: 5, max: 300 })
        .withMessage(
            'Product description should be between 5 and 300 characters'
        ),

    body('price')
        .notEmpty()
        .withMessage('Please enter a product price')
        .isNumeric()
        .withMessage('Price should be a number'),

    body('discount')
        .optional()
        .isNumeric()
        .withMessage('Discount should be a number'),

    body('ratings')
        .optional()
        .isNumeric()
        .withMessage('Ratings should be a number'),

    body('images')
        .optional()
        .isArray()
        .withMessage('Images should be an array'),

    body('category')
        .optional()
        .isString()
        .withMessage('Category should be a string'),

    body('stock')
        .optional()
        .isNumeric()
        .withMessage('Stock should be a number'),

    body('user').optional().isString().withMessage('User should be a string'),
]

const updateProductValidation = [
    param('id').customSanitizer((value) => new Mongoose.Types.ObjectId(value)),
]

module.exports = {
    createProductValidation,
    updateProductValidation,
}
