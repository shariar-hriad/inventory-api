const { Router } = require('express')
const {
    CreateCategory,
} = require('../controllers/category/category.controller')
const { protect, authorize } = require('../middleware/auth.middleware')

const categoryRoute = Router()

categoryRoute.post(
    '/create-category',
    protect,
    authorize('admin'),
    CreateCategory
)

module.exports = categoryRoute
