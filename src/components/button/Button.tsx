import React, { FunctionComponent } from 'react'
import classes from './button.module.scss'

interface ButtonProps {
  onClick?: () => void
}

export const Button: FunctionComponent<ButtonProps> = ({ onClick, children }) => (
  <button className={classes.button} onClick={onClick}>
    {children}
  </button>
)
