const asyncHandler = require('express-async-handler')
const Category = require('../../models/category/category.model.js')
const CreateService = require('../../services/common/CreateService.js')

// CREATE CATEGORY
const CreateCategory = asyncHandler(async (req, res, next) => {
    const data = await CreateService(req, res, next, Category)
    return res.status(201).json({
        message: 'Success',
        category: data,
    })
})

module.exports = {
    CreateCategory,
}
