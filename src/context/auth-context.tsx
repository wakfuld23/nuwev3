import React, { createContext, useState } from 'react'
import { User } from '@models/user'

interface AuthResponse {
  user: User
  token: string
}

interface State {
  isAuth: boolean
  user: User | null
  handleLogin: (res: AuthResponse) => void
  handleLogout: () => void
}

const AuthContext = createContext<State>({
  isAuth: true,
  user: null,
  handleLogin: () => {},
  handleLogout: () => {},
})

export const AuthContextProvider = (props: any) => {
  const [isAuth, setIsLoggedIn] = useState(!!localStorage.getItem('NUWE_TKN'))
  const [user, setUser] = useState<User | null>(null)

  const handleLogin = (res: AuthResponse) => {
    localStorage.setItem('NUWE_TKN', `Bearer ${res.token}`)
    setUser(res.user)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('NUWE_TKN')
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isAuth, user, handleLogin, handleLogout }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
