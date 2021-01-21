import React, { useContext, useState } from 'react'
import { Text, Button, TextInput } from 'react-native-paper'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../context/authContext'

const LoginForm = ({ toggle }) => {
  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassowrd] = useState('')

  return (
    <>
      <View style={styles.InnerContainer}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.TextInput}
          placeholder="Email"
        />
        <TextInput
          value={password}
          onChangeText={setPassowrd}
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.ButtonContainer}>
          <TouchableOpacity onPress={toggle}>
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
          <Button
            onPress={() => {
              signIn({ email, password })
            }}
            style={styles.Button}
            mode="contained"
          >
            Login
          </Button>
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  InnerContainer: {
    marginTop: 8,
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
