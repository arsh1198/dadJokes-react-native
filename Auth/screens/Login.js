import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text, Button, TextInput, Card } from 'react-native-paper'
import Collapsible from 'react-native-collapsible'
import LoginForm from '../components/LoginForm'
import JokeBody from '../components/JokeBody'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Login = ({ navigation }) => {
  const [isCollapsed, setCollapsed] = useState(true)
  const collapse = () => {
    setCollapsed(!isCollapsed)
  }

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
              margin: 20
            }}
          >
            <Text style={styles.CardHeading}>Sign In to save this Joke!</Text>
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
          style={{ paddingHorizontal: 20, paddingBottom: 20 }}
        >
          <LoginForm />
        </Collapsible>
      </Card>
      <Card style={styles.CardJoke}>
        <JokeBody />
      </Card>
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
    padding: 35,
    marginHorizontal: 30,
    borderRadius: 8,
    marginTop: 25,
    backgroundColor: '#e5e5e5'
  }
})
export default Login
