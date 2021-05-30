import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Link } from 'react-router-dom'

import classes from './header.module.scss'

interface HeaderProps {
  isAuth: boolean
  setAuth: Dispatch<SetStateAction<boolean>>
}

export const Header: FunctionComponent<HeaderProps> = ({ setAuth, isAuth }) => {
  const handleLogout = () => {
    localStorage.removeItem('NUWE_TKN')
    setAuth(false)
  }

  return (
    <header className={classes.header}>
      <h3>
        <i className='fab fa-github-alt'></i>
      </h3>
      <nav>
        <ul>
          {/* Logout button only visible while logged in  */}
          {isAuth && (
            <li>
              <Link to='login' onClick={handleLogout}>
                Logout
              </Link>
            </li>
          )}
          <li>
            <a href='https://github.com/abelfubu' target='_blank'>
              <i className='fab fa-github-alt'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/abelfubu/' target='_blank'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/abelfubu' target='_blank'>
              <i className='fab fa-twitter-square'></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
