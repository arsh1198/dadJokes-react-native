import React, { useRef, useState, useContext, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import LottieView from 'lottie-react-native'
import { JokeContext } from '../context/jokeContext'
import useUser from '../hooks/useUser'

const JokeActionButtons = () => {
  const { likeJoke, unlikeJoke, joke } = useContext(JokeContext)
  const { user } = useUser()
  const animationRef = useRef()
  const [likedLocal, setLikedLocal] = useState(false)
  const likedByMe = joke && user ? joke.users.includes(user.userId) : false

  useEffect(() => {
    setLikedLocal(likedByMe)
  }, [likedByMe])

  return (
    <>
      <TouchableOpacity>
        <EvilIcons name="share-google" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (animationRef.current) {
            if (likedLocal) {
              animationRef.current.play(50, 100)
              unlikeJoke(joke.id)
              setLikedLocal(false)
            } else {
              console.log('CHALA')
              animationRef.current.play(0, 50)
              likeJoke()
              setLikedLocal(true)
            }
          } else {
            console.log('nah')
          }
        }}
      >
        <View
          style={{
            marginStart: 24,
            width: 30,
            height: 30,
            position: 'relative'
          }}
        >
          <LottieView
            progress={likedLocal ? 0.5 : 0}
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
