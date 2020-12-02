import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text, Button, TextInput, Card } from 'react-native-paper'
import Collapsible from 'react-native-collapsible'
import LoginForm from '../components/LoginForm'
import JokeBody from '../components/JokeBody'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import dadJokes from '../api/dadJokesApi'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

const Login = ({ navigation }) => {
  const [isCollapsed, setCollapsed] = useState(true)
  const [joke, setJoke] = useState('Dad Joke!')
  const [isLoading, setLoading] = useState(false)
  const collapse = () => {
    setCollapsed(!isCollapsed)
  }

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
      <Card style={styles.Card}>
        <TouchableOpacity
          onPress={() => {
            collapse()
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 18
            }}
          >
            <Text
              style={{
                ...styles.CardHeading,
                fontWeight: isCollapsed ? 'normal' : 'bold'
              }}
            >
              Sign In to save this Joke!
            </Text>
            <MaterialCommunityIcons
              style={{
                transform: [{ rotate: isCollapsed ? '360deg' : '180deg' }]
              }}
              name="chevron-down-circle"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        <Collapsible
          collapsed={isCollapsed}
          style={{ paddingHorizontal: 32, paddingBottom: 25 }}
        >
          <LoginForm />
        </Collapsible>
      </Card>
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
  CardHeading: {
    fontSize: 18,
    color: '#3e3e3e'
  },
  Card: {
    marginHorizontal: 15,
    borderRadius: 8,
    marginTop: 25,
    backgroundColor: '#e5e5e5'
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
