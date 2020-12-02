import React from 'react'
import { StyleSheet } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'

const JokeBody = ({ joke, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.TextJoke}>{joke}</Text>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  TextJoke: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3e3e3e'
  }
})

export default JokeBody
