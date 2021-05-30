import { PrivateRoute } from '@auth/PrivateRoute'
import { Header } from '@components/header/Header'
import { Github } from '@pages/github/Github'
import { Login } from '@pages/login/Login'
import { Register } from '@pages/register/Register'
import AuthContext from 'context/auth-context'
import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'
import Credits from '@pages/credits/credits'

function App() {
  const { isAuth } = useContext(AuthContext)

  return (
    <BrowserRouter basename='/nuwev3'>
      <Header />
      <Switch>
        <Route exact path='/login' render={props => <Login {...props} />} />
        <Route exact path='/register' render={props => <Register {...props} />} />
        <Route exact path='/credits' component={Credits} />
        <PrivateRoute isAuthenticated={isAuth}>
          <Route exact path='/github' component={Github} />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  )
}

export default App
