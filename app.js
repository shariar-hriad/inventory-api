require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const mongoSanitize = require('express-mongo-sanitize')
const helmet = require('helmet')
const hpp = require('hpp')
const connectDB = require('./config/conn')
const { notFound, errorHandler } = require('./middleware/error.middleware')
const customerRoute = require('./routes/customer.route')
const userRoute = require('./routes/user.route')
const productsRoute = require('./routes/products.route')

connectDB()

const app = express()

const port = process.env.PORT || 5060

// middleware for application
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(mongoSanitize())
app.use(helmet())
app.use(hpp())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Express on Vercell' })
})

app.use('/api/users', userRoute)
app.use('/api/customer', customerRoute)
app.use('/api/products', productsRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log('Running on port ' + port)
})

module.exports = app
