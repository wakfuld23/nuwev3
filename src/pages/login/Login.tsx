import { Input } from '@components/input/Input'
import React, {
  Dispatch,
  FormEvent,
  FunctionComponent,
  SetStateAction,
  useCallback,
  useState,
} from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import classes from './login.module.scss'

interface LoginProps extends RouteComponentProps {
  setAuth: Dispatch<SetStateAction<boolean>>
}

export const Login: FunctionComponent<LoginProps> = ({ setAuth, history }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleCredentials = useCallback((event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement
    setCredentials(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setAuth(true)
    history.push('github')
  }, [])

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
