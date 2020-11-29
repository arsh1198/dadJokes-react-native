import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text, Button, TextInput } from 'react-native-paper'

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.Container} forceInset={{ top: 'always' }}>
      <Text style={styles.TextHeading}>Login</Text>
      <View style={styles.InnerContainer}>
        <TextInput style={styles.TextInput} label="Email" />
        <TextInput
          style={styles.TextInput}
          label="Password"
          secureTextEntry={true}
        />
        <Button style={styles.Button} mode="contained">
          Log In
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  InnerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextHeading: {
    fontSize: 40,
    padding: 12,
    fontWeight: 'bold'
  },
  TextInput: { margin: 12, width: '100%' },
  Button: { width: 100, alignSelf: 'flex-start' }
})
export default Login
