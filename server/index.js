const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

const mainRouter = require('./routes/router')
app.use('/', mainRouter)

app.listen(PORT, ()=>{
    console.log(`server running at localhost:${PORT}`)
})