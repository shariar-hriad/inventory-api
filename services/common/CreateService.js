const ErrorResponse = require('../../utils/errorResponse')

const CreateService = async (req, res, next, Model) => {
    try {
        const body = req.body
        const product = await Model.create(body)

        res.status(201).json({
            message: 'Success',
            product,
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = CreateService
