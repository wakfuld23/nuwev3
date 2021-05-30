import AuthContext from 'context/auth-context'
import React, { FunctionComponent, useContext } from 'react'
import classes from './user.module.scss'

export const UserCard: FunctionComponent = () => {
  const { user } = useContext(AuthContext)

  return (
    <section className={classes.user}>
      <div className={classes.img}>
        <h6>{user?.username[0].toUpperCase()}</h6>
      </div>
      <div className='content'>
        <p>📙 Repositories</p>
        <h3>{user?.repos}</h3>
        <p>🤟 Name</p>
        <h3>{user?.username}</h3>
        <p>💻 Company</p>
        <h3>{user?.email}</h3>
        <p>🌍 Location</p>
      </div>
    </section>
  )
}
