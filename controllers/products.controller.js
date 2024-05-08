const Products = require('../models/products.model')
const asyncHandler = require('express-async-handler')
const CreateService = require('../services/common/CreateService')
const GetAllProductsService = require('../services/products/GetAllProductsService')

const createProduct = asyncHandler(async (req, res, next) => {
    await CreateService(req, res, next, Products)
})

const getProducts = asyncHandler(async (req, res, next) => {
    await GetAllProductsService(req, res, next, Products)
})

module.exports = {
    createProduct,
    getProducts,
}
