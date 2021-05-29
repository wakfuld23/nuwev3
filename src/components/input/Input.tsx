import React, { FormEvent, FunctionComponent } from 'react'

import classes from './input.module.scss'

interface InputProps {
  type: string
  value: string
  name?: string
  label: string
  onChange: (event: FormEvent<HTMLInputElement>) => void
}
export const Input: FunctionComponent<InputProps> = ({ type, onChange, value, name, label }) => (
  <>
    <label className={classes.label} htmlFor='github-user'>
      {label}
    </label>
    <input
      className={classes.input}
      type={type}
      onChange={onChange}
      name={name}
      value={value}
      id='github-user'
    />
  </>
)
