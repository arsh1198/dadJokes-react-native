const mongoose = require('mongoose')

const jokeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  text: {
    type: String,
    default: ''
  }
})

mongoose.model('Joke', jokeSchema)
