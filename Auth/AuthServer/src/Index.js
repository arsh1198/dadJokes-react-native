require('./models/User')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)

const mongoUri =
  'mongodb+srv://turbonater62:Jatttinka1@cluster0.7yu0z.mongodb.net/Auth?retryWrites=true&w=majority'

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Connected to Mongo!')
})

mongoose.connection.on('error', error => {
  console.log('Something went wrong!:', error)
})

app.get('/', requireAuth, (req, res) => {
  res.send(`Email: ${req.user.email}`)
})

app.listen(3000, () => {
  console.log('Listening on port 3000!!')
})
