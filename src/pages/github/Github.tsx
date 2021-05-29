import React, { FormEvent, useCallback, useEffect, useState } from 'react'
import { Input } from '../../components/input/Input'
import { Repos } from '../../components/repos/Repos'
import { User } from '../../components/user/User'
import { GithubRepo } from '../../models/github-repo'

export const Github = () => {
  const [payload, setPayload] = useState<GithubRepo[] | null>(null)
  const [user, setUser] = useState<string>('abelfubu')

  useEffect(() => {
    // Debounce user keystrokes
    const timer = setTimeout(async () => {
      if (!user) return
      const response = await fetch(`https://api.github.com/users/${user}/repos?per_page=200`)
      const data = await response.json()
      setPayload(data)
      setUser('')
    }, 400)

    return () => clearTimeout(timer)
  }, [user])

  const getGithubUser = useCallback((event: FormEvent<HTMLInputElement>) => {
    setUser(event.currentTarget.value)
  }, [])

  return (
    <div className='App'>
      <Input label="Github's username" type='text' onChange={getGithubUser} value={user} />
      {payload?.length ? (
        <>
          <User user={payload[0].owner} count={payload.length} />
          <Repos repos={payload} />
        </>
      ) : (
        <h1>User not found...</h1>
      )}
    </div>
  )
}
