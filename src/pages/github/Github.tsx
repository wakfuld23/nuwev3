import { Input } from '@components/input/Input'
import { Repos } from '@components/repos/Repos'
import { User } from '@components/user/User'
import { useGithub } from 'hooks/use-github'
import React, { FormEvent, useCallback, useState } from 'react'

export const Github = () => {
  const [user, setUser] = useState<string>('abelfubu')
  const { payload, owner, error } = useGithub(user)

  const getGithubUser = useCallback((event: FormEvent<HTMLInputElement>) => {
    setUser(event.currentTarget.value)
  }, [])

  return (
    <div className='App'>
      <Input label="Github's username" type='text' onChange={getGithubUser} value={user} />
      {payload?.length && owner?.name && (
        <>
          <User user={owner} />
          <Repos repos={payload} />
        </>
      )}
      {error && <h1>User not found...</h1>}
    </div>
  )
}
