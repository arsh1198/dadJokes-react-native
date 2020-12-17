import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { AuthContext } from '../context/authContext'

const Menu = () => {
  const { signOut } = useContext(AuthContext)
  return (
    <>
      <View style={styles.Container}>
        <Button mode="contained" style={styles.Button}>
          ❤️'d Jokes
        </Button>
        <TouchableOpacity onPress={signOut}>
          <Text
            style={{
              color: '#3e3e3e',
              fontStyle: 'italic',
              textDecorationLine: 'underline',
              marginLeft: 10,
              fontSize: 14
            }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  Button: {
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    borderRadius: 30
  },
  Container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  TextUaername: {
    fontSize: 16,
    padding: 4,
    fontWeight: 'bold',
    color: '#3e3e3e'
  }
})

export default Menu
