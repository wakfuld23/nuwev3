import React, {
  Dispatch,
  FormEvent,
  FunctionComponent,
  SetStateAction,
  useCallback,
  useState,
} from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Input } from '../../components/input/Input'
import classes from './register.module.scss'

interface Credentials {
  email: string
  password: string
  username: string
}

interface LoginProps extends RouteComponentProps {
  setAuth: Dispatch<SetStateAction<boolean>>
}

export const Register: FunctionComponent<LoginProps> = ({ setAuth, history }) => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
    username: '',
  })

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
