const ErrorResponse = require('../../utils/errorResponse.js')
const isValidObjectId = require('../../utils/isValidObjectId.js')

const DeleteService = async (req, res, next, Model) => {
    try {
        const { id } = req.params

        isValidObjectId(id)
        if (!isValidObjectId)
            return next(new ErrorResponse('Invalid object id', 404))

        await Model.deleteOne({ _id: id })

        return res.status(200).json({
            message: 'success',
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = DeleteService
