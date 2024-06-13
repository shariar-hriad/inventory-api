const ErrorResponse = require('../../utils/errorResponse')

const CreateService = async (req, res, next, Model) => {
    try {
        const body = req.body
        const data = await Model.create(body)

        return data
    } catch (error) {
        return next(error)
    }
}

module.exports = CreateService
