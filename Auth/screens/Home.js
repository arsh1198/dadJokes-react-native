import * as React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Card } from 'react-native-paper'
import { JokeContext } from '../context/jokeContext'
import { SwipeListView } from 'react-native-swipe-list-view'
import { useState } from 'react'
import SearchBar from '../components/SearchBar'

const filterJokes = (jokes, query) =>
  jokes.filter(({ text }) => text.toLowerCase().includes(query.toLowerCase()))

const Home = () => {
  const [query, setQuery] = useState('')
  console.log(query)
  const { fetchLikedJokes, likedJokes, unlikeJoke } = useContext(JokeContext)
  const filteredLikedJokes = likedJokes ? filterJokes(likedJokes, query) : []

  useEffect(() => {
    fetchLikedJokes()
  }, [])

  const deleteRow = (rowMap, itemKey) => {
    const id = rowMap[itemKey].props.children[0].props.data.item.id
    rowMap[itemKey].closeRow()
    unlikeJoke(id)
    fetchLikedJokes()
  }

  const VisibleItem = props => {
    const { data } = props

    return (
      <TouchableHighlight>
        <View>
          <Card style={styles.CardJoke} elevation={6}>
            <Text style={styles.TextJoke}>{data.item.text}</Text>
          </Card>
        </View>
      </TouchableHighlight>
    )
  }

  const renderItem = (data, rowMap) => {
    return <VisibleItem data={data} />
  }

  const HiddenItemWithActions = props => {
    const { onDelete } = props

    return (
      <View
        style={{
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-end'
        }}
      >
        <TouchableOpacity
          onPress={onDelete}
          style={{
            width: 80,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FF4545',
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            marginBottom: 12,
            marginRight: 12
          }}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    )
  }

  return (
    <SafeAreaView
      forceInset={{ top: 'always' }}
      style={{ flex: 1, backgroundColor: '#5C5A7A' }}
    >
      <View style={{ paddingHorizontal: 12, marginTop: 12 }}>
        <SearchBar query={query} onQueryChanged={setQuery} />
      </View>
      <SwipeListView
        style={{ marginTop: 12 }}
        data={filteredLikedJokes}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        disableRightSwipe
        stopRightSwipe={-75}
        recalculateHiddenLayout={true}
      />
    </SafeAreaView>
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
    borderRadius: 8,
    marginBottom: 12,
    marginHorizontal: 12,
    backgroundColor: '#e5e5e5'
  }
})

export default Home
