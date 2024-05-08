const { Router } = require('express')
const { protect, authorize } = require('../middleware/auth.middleware.js')
const {
    createProduct,
    getProducts,
} = require('../controllers/products.controller.js')
const validate = require('../validation/validate.js')
const {
    createProductValidation,
} = require('../validation/product.validation.js')

const productsRoute = Router()

productsRoute.post(
    '/create-product',
    protect,
    authorize('admin'),
    validate(createProductValidation),
    createProduct
)

productsRoute.get('/', getProducts)

module.exports = productsRoute
