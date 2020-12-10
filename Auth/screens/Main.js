import React, { useContext, useEffect, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Button, Card } from 'react-native-paper'
import LoginForm from '../components/LoginForm'
import JokeBody from '../components/JokeBody'
import dadJokes from '../api/dadJokesApi'
import CollapsibleCard from '../components/CollapsibleCard'
import SignUpForm from '../components/SignUpForm'
import useUser from '../hooks/useUser'
import Menu from '../components/menu'
import { JokeContext } from '../context/jokeContext'

const Login = () => {
  const [isLogin, setLogin] = useState(true)
  const { isSignedIn, user, error } = useUser()

  const { joke, randomJoke } = useContext(JokeContext)

  const toggleLogin = () => setLogin(!isLogin)

  const heading = useMemo(() => {
    if (isSignedIn) return user.email

    if (isLogin) {
      return 'Sign In to ♥ this joke'
    } else {
      return 'Create an Account ☺'
    }
  }, [isSignedIn, isLogin])

  const content = useMemo(() => {
    if (isSignedIn) return <Menu user={user} />

    if (isLogin) {
      return <LoginForm toggle={toggleLogin} />
    } else {
      return <SignUpForm toggle={toggleLogin} />
    }
  }, [isLogin, isSignedIn])

  useEffect(() => {
    randomJoke()
  }, [])

  return (
    <SafeAreaView style={styles.Container} forceInset={{ top: 'always' }}>
      <View style={{ marginHorizontal: 16, marginTop: 24 }}>
        <CollapsibleCard heading={heading}>{content}</CollapsibleCard>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          position: 'relative'
        }}
      >
        <Card style={styles.CardJoke}>
          <JokeBody joke={joke} />
        </Card>
        <Button
          icon="shuffle"
          style={styles.ButtonNewJoke}
          mode="contained"
          onPress={() => {
            randomJoke()
          }}
        >
          new Joke!
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#5C5A7A'
  },

  CardJoke: {
    textAlign: 'center',
    height: 'auto',
    padding: 35,
    marginHorizontal: 30,
    borderRadius: 8,
    marginTop: 25,
    backgroundColor: '#e5e5e5'
  },
  ButtonNewJoke: {
    width: 150,
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    borderRadius: 30,
    height: 50,
    paddingTop: 5,
    position: 'absolute',
    bottom: 25,
    right: 25
  }
})
export default Login
