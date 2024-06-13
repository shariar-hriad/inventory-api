const ErrorResponse = require('../../utils/errorResponse.js')
const isValidObjectId = require('../../utils/isValidObjectId.js')

const UpdateProductService = async (req, res, next, Model) => {
    try {
        console.log(req.params)
        const { id } = req.params
        const { body: postBody } = req

        isValidObjectId(id)
        if (!isValidObjectId)
            return next(new ErrorResponse('Invalid object id', 404))

        const updatedProduct = await Model.updateOne({ _id: id }, postBody)

        return res.status(200).json({
            message: 'success',
            updatedProduct,
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = UpdateProductService
