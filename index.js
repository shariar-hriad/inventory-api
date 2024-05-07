require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT || 5060

app.get('/', (req, res) => {
    res.send('Express on Vercell')
})

app.listen(port, () => {
    console.log('Running on port ' + port)
})
