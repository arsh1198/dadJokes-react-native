import React, { useRef, useState, useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import LottieView from 'lottie-react-native'
import { JokeContext } from '../context/jokeContext'

const JokeActionButtons = () => {
  const { likeJoke } = useContext(JokeContext)
  const animationRef = useRef()
  const [liked, setLiked] = useState(false)
  return (
    <>
      <TouchableOpacity>
        <EvilIcons name="share-google" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          likeJoke()
          if (animationRef.current) {
            setLiked(!liked)
            liked
              ? animationRef.current.play(50, 100) // Unlike Animation
              : animationRef.current.play(0, 50) // Like Animation
          } else {
            console.log('nah')
          }
        }}
      >
        <View
          style={{
            marginStart: 24,
            // overflow: 'hidden',
            width: 30,
            height: 30,
            position: 'relative'
            // backgroundColor: 'red'
            // borderColor: 'red',
            // borderWidth: 1
          }}
        >
          <LottieView
            speed={1.5}
            loop={false}
            ref={animation => {
              animationRef.current = animation
            }}
            source={require('../assets/likeHeart.json')}
            style={{
              height: 180,
              width: 180,
              top: -40,
              left: -38,
              position: 'absolute'
            }}
          />
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({})

export default JokeActionButtons
