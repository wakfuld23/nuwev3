import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header } from '@components/header/Header'
import { Login } from '@pages/login/Login'
import { Register } from '@pages/register/Register'
import { Github } from '@pages/github/Github'
import { PrivateRoute } from '@auth/PrivateRoute'

import './App.scss'

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false)

  return (
    <BrowserRouter>
      <Header setAuth={setisAuthenticated} isAuth={isAuthenticated} />
      <Switch>
        <Route
          exact
          path='/login'
          render={props => <Login setAuth={setisAuthenticated} {...props} />}
        />
        <Route
          exact
          path='/register'
          render={props => <Register setAuth={setisAuthenticated} {...props} />}
        />
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <Route exact path='/github' component={Github} />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  )
}

export default App
