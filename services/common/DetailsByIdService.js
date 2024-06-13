const ErrorResponse = require('../../utils/errorResponse.js')
const isValidObjectId = require('../../utils/isValidObjectId.js')

const DetailsByIdService = async (req, res, next, Model) => {
    try {
        const { id } = req.params

        isValidObjectId(id)
        if (!isValidObjectId)
            return next(new ErrorResponse('Invalid object id', 404))

        const product = await Model.findById({ _id: id })
        if (!product) {
            return next(new ErrorResponse('Not found', 404))
        }

        return res.status(200).json({
            message: 'success',
            product,
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = DetailsByIdService
