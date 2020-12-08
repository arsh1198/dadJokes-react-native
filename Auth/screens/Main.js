import React, { useEffect, useMemo, useState } from 'react'
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

const Login = () => {
  const [joke, setJoke] = useState('Dad Joke!')
  const [isLoading, setLoading] = useState(false)
  const [isLogin, setLogin] = useState(true)
  const { isSignedIn, user, error } = useUser()
  console.log(user)
  const heading = isLogin ? 'Sign In to ♥ this joke' : 'Create an Account ☺'
  const toggleLogin = () => setLogin(!isLogin)

  const content = useMemo(() => {
    if (isSignedIn) return <Menu user={user} />

    if (isLogin) {
      return <LoginForm toggle={toggleLogin} />
    } else {
      return <SignUpForm toggle={toggleLogin} />
    }
  }, [isLogin, isSignedIn])

  const newJoke = async () => {
    setLoading(true)
    const response = await dadJokes.get('/', {
      headers: { Accept: 'application/json' }
    })
    setLoading(false)
    console.log(response.data)
    setJoke(response.data.joke)
  }

  useEffect(() => {
    newJoke()
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
          <JokeBody joke={joke} isLoading={isLoading} />
        </Card>
        <Button
          icon="shuffle"
          style={styles.ButtonNewJoke}
          mode="contained"
          onPress={() => {
            newJoke()
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
