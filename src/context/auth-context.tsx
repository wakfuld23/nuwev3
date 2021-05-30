import React, { createContext, useState } from 'react'
import { User } from '@models/user'

interface State {
  isAuth: boolean
  user: User | null
  handleLogin: () => void
  handleLogout: () => void
  setContextUser: (user: User) => void
}

const AuthContext = createContext<State>({
  isAuth: true,
  user: null,
  handleLogin: () => {},
  handleLogout: () => {},
  setContextUser: () => {},
})

export const AuthContextProvider = (props: any) => {
  const [isAuth, setIsLoggedIn] = useState(!!localStorage.getItem('NUWE_TKN'))
  const [user, setUser] = useState<User | null>(null)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const setContextUser = (user: User) => {
    setUser(user)
  }

  return (
    <AuthContext.Provider value={{ isAuth, user, handleLogin, handleLogout, setContextUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
