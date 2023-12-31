import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './Context'

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  const { logado } = useContext(AuthContext)
  return logado ? children : <Navigate to="/app" />
}
