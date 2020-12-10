import { createContext, useReducer } from 'react'
import dadJokesApi from '../api/dadJokesApi'
import React from 'react'

export const JokeContext = createContext()

const initialState = {
  joke: null,
  error: null
}

const jokeReducer = (state, action) => {
  switch (action.type) {
    case 'RANDOM_JOKE':
      return { ...state, joke: action.payload, error: null }
    case 'JOKE_LOADING':
      return { ...state, jokeLoading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    default:
      return state
  }
}

const jokeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jokeReducer, initialState)
  const { joke, jokeLoading, error } = state

  const randomJoke = async () => {
    try {
      dispatch({ type: 'JOKE_LOADING', payload: true })
      const response = await dadJokesApi.get('/', {
        headers: { Accept: 'application/json' }
      })
      dispatch({ type: 'JOKE_LOADING', payload: false })
      dispatch({ type: 'RANDOM_JOKE', payload: response.data.joke })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error })
    }
  }

  return (
    <JokeContext.Provider value={{ joke, jokeLoading, error, randomJoke }}>
      {children}
    </JokeContext.Provider>
  )
}

export default jokeProvider
