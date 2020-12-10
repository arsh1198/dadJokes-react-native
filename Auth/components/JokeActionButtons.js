import React, { useRef } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import LottieView from 'lottie-react-native'

const JokeActionButtons = () => {
  const animationRef = useRef()

  return (
    <>
      <TouchableOpacity>
        <EvilIcons name="share-google" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (animationRef.current) {
            console.log('chlya')
            animationRef.current.play()
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
