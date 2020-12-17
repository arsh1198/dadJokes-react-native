import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

export default useUser = () => {
  const { user, error } = useContext(AuthContext)
  return {
    isSignedIn: Boolean(user),
    user,
    error
  }
}
