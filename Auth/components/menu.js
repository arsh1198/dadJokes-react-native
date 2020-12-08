import React, { createContext } from 'react'
import { Text } from 'react-native-paper'
import AuthContext from '../context/authContext'

const Menu = ({ user }) => {
  return (
    <>
      <Text>{user.email}</Text>
    </>
  )
}

export default Menu
