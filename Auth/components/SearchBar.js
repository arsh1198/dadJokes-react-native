import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Octicons } from '@expo/vector-icons'

const SearchBar = ({ query, onQueryChanged }) => {
  return (
    <View style={styles.BackgroundStyle}>
      <Octicons name="search" style={styles.IconStyle} />
      <TextInput
        value={query}
        onChangeText={text => {
          console.log(text)
          onQueryChanged(text)
        }}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search for a Joke"
        style={styles.TextInputStyle}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  BackgroundStyle: {
    display: 'flex',
    height: 50,
    backgroundColor: '#F0EEEE',
    borderRadius: 22,
    flexDirection: 'row'
  },
  TextInputStyle: {
    flex: 1,
    fontSize: 16
  },
  IconStyle: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 15,
    marginHorizontal: 20
  }
})

export default SearchBar
