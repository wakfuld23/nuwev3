import { Input } from '@components/input/Input'
import { Repos } from '@components/repos/Repos'
import { UserCard } from '@components/user/User'
import AuthContext from 'context/auth-context'
import { useGithub } from 'hooks/use-github'
import React, { FormEvent, useCallback, useContext, useState } from 'react'

export const Github = () => {
  const { user } = useContext(AuthContext)

  const [userInput, setUserInput] = useState<string>(user?.username || '')
  const { payload, error } = useGithub(user)

  const getGithubUser = useCallback((event: FormEvent<HTMLInputElement>) => {
    setUserInput(event.currentTarget.value)
  }, [])

  return (
    <div className='App'>
      <Input label="Github's username" type='text' onChange={getGithubUser} value={userInput} />
      <>
        {user?.username && <UserCard />}
        {payload?.length && <Repos repos={payload} />}
      </>
      {!payload?.length && <h1>User not found...</h1>}
    </div>
  )
}
