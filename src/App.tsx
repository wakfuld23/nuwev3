import React, { useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Header } from '@components/header/Header'
import { Login } from '@pages/login/Login'
import { Register } from '@pages/register/Register'
import { Github } from '@pages/github/Github'
import { PrivateRoute } from '@auth/PrivateRoute'

import './App.scss'
import Credits from '@pages/credits/credits'

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false)

  return (
    <BrowserRouter basename='/nuwev3'>
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
        <Route exact path='/credits' component={Credits} />
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <Route exact path='/github' component={Github} />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  )
}

export default App
