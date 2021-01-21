const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const router = express.Router()

const User = mongoose.model('User')

router.post('/signup', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = new User({ email, password })
    await user.save()
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      'semcretkey'
    )
    res.send({ token })
  } catch (error) {
    res.status(422).send(error.message)
  }
})

router.post('/signin', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide Email and Password!' })
  }

  const user = await User.findOne({ email })
  if (!user) {
    return res.status(422).send({ error: 'Invalid Email or Password!' })
  }

  try {
    await user.comparePassword(password)
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      'semcretkey'
    )
    res.send({ token })
  } catch (error) {
    return res.status(422).send({ error: 'Invalid Email or Password!' })
  }
})

module.exports = router
