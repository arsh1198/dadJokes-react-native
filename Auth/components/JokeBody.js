import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ActivityIndicator, Text, Divider } from 'react-native-paper'
import JokeActionButtons from './JokeActionButtons'

const JokeBody = ({ joke, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text style={styles.TextJoke}>{joke}</Text>
          <Divider style={{ marginVertical: 20, height: 1 }} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
          >
            <JokeActionButtons />
          </View>
        </>
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
