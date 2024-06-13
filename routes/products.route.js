const { Router } = require('express')
const { protect, authorize } = require('../middleware/auth.middleware.js')
const {
    CreateProduct,
    GetAllProducts,
    UpdateProduct,
    DeleteProduct,
    ProductsDetailsById,
} = require('../controllers/products.controller.js')
const validate = require('../validation/validate.js')
const {
    createProductValidation,
    updateProductValidation,
} = require('../validation/product.validation.js')

const productsRoute = Router()

// CREATE PRODUCT
productsRoute.post(
    '/create-product',
    protect,
    authorize('admin'),
    validate(createProductValidation),
    CreateProduct
)

// GET ALL PRODUCTS
productsRoute.get('/', GetAllProducts)

// UPDATE PRODUCT BY ID
productsRoute.post(
    '/update-product/:id',
    protect,
    authorize('admin'),
    UpdateProduct
)

// DELETE PRODUCT BY ID
productsRoute.delete('/:id', protect, authorize('admin'), DeleteProduct)

// PRODUCT DETAILS BY ID
productsRoute.get('/:id', protect, authorize('admin'), ProductsDetailsById)

module.exports = productsRoute
