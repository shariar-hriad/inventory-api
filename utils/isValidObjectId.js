const mongoose = require('mongoose')

const isValidObjectId = (id, next) => {
    return mongoose.Types.ObjectId.isValid(id)
}

module.exports = isValidObjectId
