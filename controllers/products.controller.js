const Products = require('../models/products.model')
const asyncHandler = require('express-async-handler')
const CreateService = require('../services/common/CreateService')
const DeleteService = require('../services/common/DeleteService')
const GetAllProductsService = require('../services/products/GetAllProductsService')
const UpdateProductService = require('../services/products/UpdateProductService')
const isValidObjectId = require('../utils/isValidObjectId')
const ErrorResponse = require('../utils/errorResponse')
const DetailsByIdService = require('../services/common/DetailsByIdService')

const CreateProduct = asyncHandler(async (req, res, next) => {
    await CreateService(req, res, next, Products)
})

const GetAllProducts = asyncHandler(async (req, res, next) => {
    await GetAllProductsService(req, res, next, Products)
})

const UpdateProduct = asyncHandler(async (req, res, next) => {
    await UpdateProductService(req, res, next, Products)
})

const DeleteProduct = asyncHandler(async (req, res, next) => {
    await DeleteService(req, res, next, Products)
})

const ProductsDetailsById = asyncHandler(async (req, res, next) => {
    await DetailsByIdService(req, res, next, Products)
})

module.exports = {
    CreateProduct,
    GetAllProducts,
    UpdateProduct,
    DeleteProduct,
    ProductsDetailsById,
}
