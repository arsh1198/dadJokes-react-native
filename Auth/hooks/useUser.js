import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

export default useUser = () => {
  const { user, error } = useContext(AuthContext)
  console.log('Hook', user)
  return {
    isSignedIn: Boolean(user),
    user,
    error
  }
}
