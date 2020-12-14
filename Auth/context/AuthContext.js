import React, { useReducer, createContext } from 'react'
import { AsyncStorage } from 'react-native'
import authApi from '../api/authApi'
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext()

const initialState = {
  user: null,
  error: null
}

const authReducer = (state, Action) => {
  switch (Action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: Action.payload,
        error: null
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        error: null
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: Action.payload
      }
    default:
      return state
  }
}

const authProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  const { user, error } = state

  const signUp = async ({ email, password }) => {
    try {
      const response = await authApi.post('/signup', { email, password })
      await AsyncStorage.setItem('token', response.data.token)
      const decoded = jwt_decode(response.data.token)
      dispatch({
        type: 'LOGIN',
        payload: {
          email: decoded.email
        }
      })
    } catch (error) {
      console.log({ error })
      dispatch({
        type: 'SET_ERROR',
        payload: error?.message || 'Signup failed'
      })
    }
  }

  const signIn = async ({ email, password }) => {
    try {
      const response = await authApi.post('/signin', { email, password })
      console.log('SIGN IN', response.data)
      await AsyncStorage.setItem('token', response.data.token)
      const decoded = jwt_decode(response.data.token)
      console.log('decoded', decoded)
      dispatch({
        type: 'LOGIN',
        payload: {
          userId: decoded._id,
          email: decoded.email
        }
      })
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        payload: error?.message || 'Signin failed'
      })
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, error, signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default authProvider
