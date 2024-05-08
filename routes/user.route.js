const { Router } = require('express')
const { login, logout } = require('../controllers/auth.controller.js')
const { getUser, register } = require('../controllers/user.controller.js')
const { protect } = require('../middleware/auth.middleware.js')
const { registerValidation } = require('../validation/user.validation.js')
const validate = require('../validation/validate.js')

const userRoute = Router()

userRoute.post('/register', validate(registerValidation), register)
userRoute.post('/auth', login)
userRoute.get('/logout', logout)
userRoute.get('/profile', protect, getUser)

module.exports = userRoute
