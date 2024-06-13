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
const productRoute = require('./routes/product.route')
const categoryRoute = require('./routes/category.route')

connectDB()

const app = express()

const port = process.env.PORT || 5060

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}

// middleware for application
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(mongoSanitize())
app.use(helmet())
app.use(hpp())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Express on Vercell' })
})

app.use('/api/users', userRoute)
app.use('/api/customer', customerRoute)
app.use('/api/category', categoryRoute)
app.use('/api/product', productRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log('Running on port ' + port)
})

module.exports = app
