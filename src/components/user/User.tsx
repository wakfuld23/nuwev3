import { GithubUser } from '@models/github-user'
import React, { FunctionComponent } from 'react'
import classes from './user.module.scss'

interface UserProps {
  user: GithubUser
}
export const User: FunctionComponent<UserProps> = ({ user }) => (
  <section className={classes.user}>
    <img src={user.avatar_url} alt='Github Profile' />
    <div className='content'>
      <a href={user.html_url} target='_blank'>
        <h1>{user.login.substring(0, 1).toUpperCase() + user.login.substring(1)}</h1>
      </a>
      <h3>{user.bio}</h3>
      <p>📙 Repositories</p>
      <h3>{user.public_repos}</h3>
      <p>🤟 Name</p>
      <h3>{user.name}</h3>
      <p>💻 Company</p>
      <h3>{user.company}</h3>
      <p>🌍 Location</p>
      <h3>{user.location}</h3>
      <p>🕵️‍♂️ Followers</p>
      <h3>{user.followers}</h3>
    </div>
  </section>
)
