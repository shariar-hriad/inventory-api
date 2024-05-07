const asyncHandler = require('express-async-handler')
const User = require('../models/user.model.js')
const UserCreateService = require('../services/user/UserCreateService.js')
const UserDetailsService = require('../services/user/UserDetailsService.js')

/**
 * @desc Register a new user
 * @route POST api/users/register
 * @access Public
 */

const register = asyncHandler(async (req, res, next) => {
    await UserCreateService(req, res, next, User)
})

/**
 * @desc Get user information
 * @route GET api/users/profile:id
 * @access Private
 */
const getUser = asyncHandler(async (req, res, next) => {
    await UserDetailsService(req, res, next, User)
})

module.exports = { getUser, register }
