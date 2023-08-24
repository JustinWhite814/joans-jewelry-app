require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

// const db = require('./models')

// const jewelControl = require('./controllers')

const app = express()


app.listen(process.env.PORT, function(){
    console.log('Express is listening to port', process.env.PORT)
})