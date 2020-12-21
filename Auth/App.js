import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import Main from './screens/Main'
import Home from './screens/Home'
import AuthProvider from './context/authContext'
import JokeProvider from './context/jokeContext'

const Stack = createStackNavigator()

export default function App() {
  return (
    <AuthProvider>
      <JokeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Saved Jokes' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </JokeProvider>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
