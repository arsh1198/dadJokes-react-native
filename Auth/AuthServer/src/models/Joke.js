const mongoose = require('mongoose')

const jokeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    default: ''
  }
})

mongoose.model('Joke', jokeSchema)
