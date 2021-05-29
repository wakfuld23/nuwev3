import { GithubRepo } from '@models/github-repo'
import { GithubUser } from '@models/github-user'
import { useCallback, useEffect, useState } from 'react'

export const useGithub = (user: string) => {
  const [payload, setPayload] = useState<GithubRepo[] | null>(null)
  const [owner, setOwner] = useState<GithubUser | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = useCallback(async (url: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${url}`)
      setError(null)
      return response.json()
    } catch (error) {
      setError(error)
    }
  }, [])

  useEffect(() => {
    // Debounce user keystrokes
    const timer = setTimeout(async () => {
      if (!user) return

      const repos = await fetchData(`${user}/repos?per_page=200`)
      const owner = await fetchData(user)

      setPayload(repos)
      setOwner(owner)
    }, 400)

    return () => clearTimeout(timer)
  }, [user])

  return { payload, owner, error }
}
