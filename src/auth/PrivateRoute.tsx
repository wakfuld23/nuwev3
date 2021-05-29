import React, { FunctionComponent } from 'react'
import { Redirect, Route } from 'react-router-dom'

interface PrivateRouteProps {
  isAuthenticated: boolean
}

export const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  children,
  isAuthenticated,
}) => (
  <Route
    render={({ location }) => {
      return isAuthenticated ? children : <Redirect to={{ pathname: '/login' }} />
    }}
  />
)
