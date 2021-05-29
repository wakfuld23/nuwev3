import React, { FormEvent, useCallback, useEffect, useState } from 'react'
import { Input } from '@components/input/Input'
import { Repos } from '@components/repos/Repos'
import { User } from '@components/user/User'
import { GithubRepo } from '@models/github-repo'
import { GithubUser } from '@models/github-user'

export const Github = () => {
  const [payload, setPayload] = useState<GithubRepo[] | null>(null)
  const [user, setUser] = useState<string>('abelfubu')
  const [owner, setOwner] = useState<GithubUser | null>(null)

  useEffect(() => {
    // Debounce user keystrokes
    const timer = setTimeout(async () => {
      if (!user) return

      const reposRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=200`)
      const ownerRes = await fetch(`https://api.github.com/users/${user}`)

      setPayload(await reposRes.json())
      setOwner(await ownerRes.json())
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
      {payload?.length && owner ? (
        <>
          <User user={owner} />
          <Repos repos={payload} />
        </>
      ) : (
        <h1>User not found...</h1>
      )}
    </div>
  )
}
