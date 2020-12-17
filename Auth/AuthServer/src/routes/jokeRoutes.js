const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')

const User = mongoose.model('User')
const Joke = mongoose.model('Joke')

const router = express.Router()

router.use(requireAuth)

router.get('/jokes', async (req, res) => {
  const jokes = await Joke.find({ user: req.user._id })
  res.send(jokes)
})

router.post('/joke', async (req, res) => {
  const { id, text } = req.body
  console.log('BODY', req.body)

  if (!text || !req.user) {
    return res.status(400).send({ error: 'Something went wrong!' })
  }
  try {
    const joke = await Joke.updateOne(
      { id },
      { text, $addToSet: { users: req.user._id } },
      { upsert: true }
    )
    res.send({ message: 'Added to your ♥ jokes!' })
  } catch (error) {
    res.status(422).send(error.message)
  }
})

module.exports = router
