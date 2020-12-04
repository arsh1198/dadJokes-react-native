import React, { useReducer, createContext } from 'react'
import { AsyncStorage } from 'react-native'
import authApi from '../api/authApi'

export const AuthContext = createContext()

const AuthReducer = (state, Action) => {
  switch (Action.type) {
    default:
      return state
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {})

  const signUp = async ({ email, password }) => {
    try {
      const response = await authApi.post('/signup', { email, password })
      AsyncStorage.setItem('token', response.data.token)
      console.log(response.data.token)
    } catch (error) {}
  }

  const signIn = async ({ email, password }) => {
    try {
      const response = await authApi.post('/signin', { email, password })
      AsyncStorage.setItem('token', response.data.token)
      console.log(response.data)
    } catch (error) {}
  }

  return (
    <AuthContext.Provider value={{ signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
