require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

const app = express()

const port = process.env.PORT || 5060

// middleware for application
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.status(200).json({ messahe: 'Express on Vercell' })
})

app.listen(port, () => {
    console.log('Running on port ' + port)
})
