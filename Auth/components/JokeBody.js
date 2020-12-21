import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ActivityIndicator, Text, Divider } from 'react-native-paper'
import JokeActionButtons from './JokeActionButtons'
import { JokeContext } from '../context/jokeContext'

const JokeBody = ({ joke, actionButtons, divider }) => {
  const { jokeLoading } = useContext(JokeContext)

  return (
    <>
      {jokeLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text style={styles.TextJoke}>{joke}</Text>
          {divider ? (
            <Divider style={{ marginVertical: 20, height: 1 }} />
          ) : null}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
          >
            {actionButtons ? <JokeActionButtons /> : null}
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
