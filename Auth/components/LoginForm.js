import React, { useState } from 'react'
import { Text, Button, TextInput, Card } from 'react-native-paper'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Collapsible from 'react-native-collapsible'

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
        <View style={styles.ButtonContainer}>
          <TouchableOpacity>
            <Text
              style={{
                color: '#3e3e3e',
                fontStyle: 'italic',
                textDecorationLine: 'underline',
                marginLeft: 10,
                fontSize: 14
              }}
            >
              Create an Account!
            </Text>
          </TouchableOpacity>
          <Button style={styles.Button} mode="contained">
            Log In
          </Button>
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  InnerContainer: {
    marginTop: 25,
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
    width: 100,
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    borderRadius: 30
  },
  ButtonContainer: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default LoginForm
