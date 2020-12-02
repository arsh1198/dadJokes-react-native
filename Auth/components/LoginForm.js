import React from 'react'
import { Text, Button, TextInput } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

const LoginForm = () => {
  return (
    <>
      <View style={styles.InnerContainer}>
        <TextInput style={styles.TextInput} placeholder="Email" />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button style={styles.Button} mode="contained">
          Log In
        </Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  InnerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  TextInput: {
    margin: 8,
    width: '100%',
    height: 45,
    backgroundColor: '#c4c4c4',
    fontSize: 14
  },
  Button: {
    marginTop: 35,
    width: 100,
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    borderRadius: 30
  }
})

export default LoginForm
