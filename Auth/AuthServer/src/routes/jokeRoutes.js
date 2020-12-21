const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')
const axios = require('axios')

const Joke = mongoose.model('Joke')

const router = express.Router()

router.get('/jokes', requireAuth, async (req, res) => {
  if (req.user) {
    const jokes = await Joke.find({ users: req.user._id })
    res.send(jokes)
  } else {
    res.status(401).send({ error: 'Something went wrong!' })
  }
})

router.post('/like', requireAuth, async (req, res) => {
  const { id, text } = req.body
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

router.post('/unlike', requireAuth, async (req, res) => {
  const { id } = req.body
  console.log('Juser', typeof req.user._id)
  if (!id || !req.user) {
    return res.status(400).send({ error: 'Something went wrong!' })
  }
  try {
    const joke = await Joke.updateOne(
      { id },
      { $pull: { users: req.user._id } }
    )
    res.send({ message: 'Removed from your ♥ jokes!' })
  } catch (error) {
    res.status(422).send(error.message)
  }
})

router.get('/random', async (req, res) => {
  const { data } = await axios.get('https://icanhazdadjoke.com', {
    headers: { Accept: 'application/json' }
  })

  const jokeInDB = await Joke.findOne({ id: data.id })
  const users = jokeInDB ? jokeInDB.users : []

  const joke = { ...data, users }

  res.json(joke)
})

module.exports = router
