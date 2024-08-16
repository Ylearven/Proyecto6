require('dotenv').config()
const express = require('express')

const { connectDB } = require('./src/config/db')
const medalleroRouter = require('./src/api/routes/Medallero')
const jjooRouter = require('./src/api/routes/jjoo')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
connectDB()

app.use('/api/v1/medallero', medalleroRouter)
app.use('/api/v1/jjoo', jjooRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000 ')
})
