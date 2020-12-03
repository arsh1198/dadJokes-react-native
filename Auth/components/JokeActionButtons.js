import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const JokeActionButtons = () => {
  return (
    <>
      <TouchableOpacity>
        <Ionicons name="md-share" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="md-heart-empty"
          size={30}
          color="black"
          style={{ marginLeft: 32 }}
        />
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({})

export default JokeActionButtons
