import * as React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Card } from 'react-native-paper'
import JokeBody from '../components/JokeBody'
import { JokeContext } from '../context/jokeContext'

const Home = () => {
  const { fetchLikedJokes, likedJokes } = useContext(JokeContext)
  useEffect(() => {
    fetchLikedJokes()
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: '#5C5A7A' }}>
      <FlatList
        style={{ marginBottom: 16 }}
        data={likedJokes}
        renderItem={({ item }) => (
          <Card style={styles.CardJoke}>
            <Text style={styles.TextJoke}>{item.text}</Text>
          </Card>
        )}
        keyExtractor={joke => joke.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  TextJoke: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3e3e3e'
  },
  CardJoke: {
    textAlign: 'center',
    height: 'auto',
    padding: 24,
    marginHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
    backgroundColor: '#e5e5e5'
  }
})

export default Home
