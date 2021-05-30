import { Input } from '@components/input/Input'
import AuthContext from 'context/auth-context'
import React, { FormEvent, FunctionComponent, useContext, useState } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import classes from './login.module.scss'

interface LoginProps extends RouteComponentProps {}

export const Login: FunctionComponent<LoginProps> = ({ history }) => {
  const { handleLogin } = useContext(AuthContext)
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleCredentials = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement
    setCredentials({ ...credentials, [name]: value })
  }

  const fetchUser = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    }
    const response = await fetch('https://nuwe-server.herokuapp.com/api/user/login', requestOptions)
    return await response.json()
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!credentials.email || !credentials.password) return

    try {
      const user = await fetchUser()
      if (!user?.token) return
      handleLogin(user)
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className={classes.login}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.header}>Login</h1>
        <Input
          label='Email'
          value={credentials.email}
          type='email'
          name='email'
          onChange={handleCredentials}
        />
        <Input
          label='Password'
          value={credentials.password}
          type='password'
          name='password'
          onChange={handleCredentials}
        />
        <button className={classes.button}>LOGIN</button>
        <Link to='/register'>Not registered yet - Go to sign up</Link>
      </form>
    </section>
  )
}
