const { Router } = require('express')
const { protect, authorize } = require('../middleware/auth.middleware.js')
const {
    CreateProduct,
    GetAllProducts,
    UpdateProduct,
    DeleteProduct,
    ProductsDetailsById,
} = require('../controllers/product.controller.js')
const validate = require('../validation/validate.js')
const {
    createProductValidation,
    updateProductValidation,
} = require('../validation/product.validation.js')

const productRoute = Router()

// CREATE PRODUCT
productRoute.post(
    '/create-product',
    protect,
    authorize('admin'),
    validate(createProductValidation),
    CreateProduct
)

// GET ALL PRODUCTS
productRoute.get('/', GetAllProducts)

// UPDATE PRODUCT BY ID
productRoute.post(
    '/update-product/:id',
    protect,
    authorize('admin'),
    UpdateProduct
)

// DELETE PRODUCT BY ID
productRoute.delete('/:id', protect, authorize('admin'), DeleteProduct)

// PRODUCT DETAILS BY ID
productRoute.get('/:id', protect, authorize('admin'), ProductsDetailsById)

module.exports = productRoute
