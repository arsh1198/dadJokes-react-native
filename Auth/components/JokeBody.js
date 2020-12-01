import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-paper'
import dadJokes from '../api/dadJokesApi'

const JokeBody = () => {
  const newJoke = async () => {
    const response = await dadJokes.get('/', {
      headers: { Accept: 'application/json' }
    })
    console.log(response.data)
    setJoke(response.data.joke)
  }

  const [joke, setJoke] = useState('Dad Joke!')
  return (
    <>
      <Text style={styles.TextJoke}>{joke}</Text>
      <Button
        style={styles.ButtonNewJoke}
        onPress={() => {
          newJoke()
        }}
      >
        new Joke!
      </Button>
    </>
  )
}

const styles = StyleSheet.create({
  TextJoke: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3e3e3e'
  },
  ButtonNewJoke: {
    marginTop: 40
  }
})

export default JokeBody
