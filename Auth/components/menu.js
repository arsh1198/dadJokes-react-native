import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

const Menu = () => {
  return (
    <>
      <View style={styles.Container}>
        <Button mode="contained" style={styles.Button}>
          ❤️'d Jokes
        </Button>
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
