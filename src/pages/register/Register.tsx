import React, {
  Dispatch,
  FormEvent,
  FunctionComponent,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { Input } from '@components/input/Input'

import classes from './register.module.scss'
import AuthContext from 'context/auth-context'

interface Credentials {
  email: string
  password: string
  username: string
}

interface LoginProps extends RouteComponentProps {
  setAuth: Dispatch<SetStateAction<boolean>>
}

export const Register: FunctionComponent<LoginProps> = ({ history }) => {
  const { handleLogin } = useContext(AuthContext)
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
    username: '',
  })

  const handleCredentials = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement
    setCredentials(prev => ({ ...prev, [name]: value }))
  }

  const createUser = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    }
    const response = await fetch('https://nuwe-server.herokuapp.com/api/user/', requestOptions)
    return await response.json()
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!credentials.email || !credentials.password || !credentials.username) return

    try {
      const user = await createUser()
      if (!user?.token) return
      localStorage.setItem('NUWE_TKN', `Bearer ${user.token}`)
      handleLogin()
      history.push('github')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className={classes.register}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.header}>Register</h1>
        <Input
          label='Email'
          value={credentials.email}
          type='email'
          name='email'
          onChange={handleCredentials}
        />
        <Input
          label='Username'
          value={credentials.username}
          type='username'
          name='username'
          onChange={handleCredentials}
        />
        <Input
          label='Password'
          value={credentials.password}
          type='password'
          name='password'
          onChange={handleCredentials}
        />
        <button className={classes.button}>REGISTER</button>
        <Link to='/login'>Already registered? - Go to sign in</Link>
      </form>
    </section>
  )
}
