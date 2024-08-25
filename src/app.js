require('dotenv').config()
const express = require('express')
const cors = require('cors')

const routes = require('./routes/routes')
const connectDataBase = require('./database/db')

const app = express()

// Config express json

app.use(cors())
app.use(express.json())
app.use(routes)

connectDataBase().then(() => {
    app.listen(3000)
    console.log('Aplicação On')
}).catch((error) => {
    console.log(error)
})