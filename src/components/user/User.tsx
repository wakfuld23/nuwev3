import { GithubRepo } from '@models/github-repo'
import React, { FunctionComponent } from 'react'
import classes from './user.module.scss'

interface UserProps {
  user: GithubRepo['owner']
  count: number
}
export const User: FunctionComponent<UserProps> = ({ user, count }) => (
  <section className={classes.user}>
    <img src={user.avatar_url} alt='Github Profile' />
    <div className='content'>
      <h1>{user.login.toUpperCase()}</h1>
      <p>📙 Repositories: {count}</p>
      <p>👨‍🎓 Type: {user.type}</p>
      <p>
        😁{' '}
        <a href={user.html_url} target='_blank'>
          Link to Profile
        </a>
      </p>
    </div>
  </section>
)
