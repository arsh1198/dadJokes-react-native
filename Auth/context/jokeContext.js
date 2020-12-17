import { createContext, useReducer } from 'react'
import dadJokesApi from '../api/dadJokesApi'
import React from 'react'
import authApi from '../api/authApi'

export const JokeContext = createContext()

const initialState = {
  joke: null,
  liked: false,
  jokeLoading: true,
  error: null
}

const jokeReducer = (state, action) => {
  switch (action.type) {
    case 'RANDOM_JOKE':
      return { ...state, joke: action.payload, error: null }
    case 'LIKE_JOKE':
      return { ...state, liked: action.payload }
    case 'JOKE_LOADING':
      return { ...state, jokeLoading: action.payload }
    case 'SET_ERROR':
    default:
      return state
  }
}

const jokeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jokeReducer, initialState)
  const { joke, liked, jokeLoading, error } = state

  const randomJoke = async () => {
    try {
      dispatch({ type: 'JOKE_LOADING', payload: true })
      const response = await dadJokesApi.get('/', {
        headers: { Accept: 'application/json' }
      })
      dispatch({ type: 'JOKE_LOADING', payload: false })
      dispatch({
        type: 'RANDOM_JOKE',
        payload: { id: response.data.id, text: response.data.joke }
      })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error })
    }
  }

  const likeJoke = async () => {
    try {
      if (joke) {
        console.log(joke.id, joke.text)
        const response = await authApi.post('/joke', {
          id: joke.id,
          text: joke.text
        })
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <JokeContext.Provider
      value={{ joke, liked, jokeLoading, error, randomJoke, likeJoke }}
    >
      {children}
    </JokeContext.Provider>
  )
}

export default jokeProvider
