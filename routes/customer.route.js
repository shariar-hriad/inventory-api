const { Router } = require('express')
const {
    createCustomer,
    deleteCustomer,
    getAllCustomer,
    updateCustomerProfile,
} = require('../controllers/customer.controller.js')
const { authorize, protect } = require('../middleware/auth.middleware.js')
const createCustomerValidation = require('../validation/customer.validation.js')
const validate = require('../validation/validate.js')

const customerRoute = Router()

customerRoute.get('/', protect, authorize('admin'), getAllCustomer)
customerRoute.post(
    '/create-customer',
    protect,
    authorize('admin'),
    validate(createCustomerValidation),
    createCustomer
)
customerRoute.post(
    '/update-customer/:id',
    protect,
    authorize('admin'),
    updateCustomerProfile
)
customerRoute.delete(
    '/delete-customer/:id',
    protect,
    authorize('admin'),
    deleteCustomer
)

module.exports = customerRoute
