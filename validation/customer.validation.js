const { body } = require('express-validator')

const createCustomerValidation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Customer name is required')
        .isLength({ min: 2, max: 20 })
        .withMessage('Customer name should be between 2 and 20 characters'),

    body('phoneNumber')
        .trim()
        .notEmpty()
        .withMessage('Customer phone number is required'),

    body('address').optional().trim(),

    body('totalPurchase')
        .optional()
        .isNumeric()
        .withMessage('Total purchase should be a number'),
]

module.exports = createCustomerValidation
