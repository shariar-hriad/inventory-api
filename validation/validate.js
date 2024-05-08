const { validationResult } = require('express-validator')

const validate = (validations) => {
    return async (req, res, next) => {
        // Run all validations asynchronously
        await Promise.all(validations.map((validation) => validation.run(req)))

        const errors = validationResult(req)
        if (errors.isEmpty()) {
            return next()
        }

        // If there are validation errors, return a 400 response with the errors
        res.status(400).json({ errors: errors.array() })
    }
}

module.exports = validate
