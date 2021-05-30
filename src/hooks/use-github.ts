import { GithubRepo } from '@models/github-repo'
import { GithubUser } from '@models/github-user'
import { User } from '@models/user'
import AuthContext from 'context/auth-context'
import { useCallback, useContext, useEffect, useState } from 'react'

export const useGithub = (currentUser: User | null) => {
  const { handleLogin } = useContext(AuthContext)
  const [payload, setPayload] = useState<GithubRepo[] | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = useCallback(async (url: string) => {
    try {
      const response = await fetch(url, {
        headers: { Authorization: localStorage.getItem('NUWE_TKN') || '' },
      })
      setError(null)
      return response.json()
    } catch (error) {
      setError(error)
    }
  }, [])

  useEffect(() => {
    // Debounce user keystrokes
    const timer = setTimeout(async () => {
      const repos = await fetchData(
        'https://nuwe-server.herokuapp.com/api/repository/getRepoByUser',
      )
      if (!currentUser) {
        const token = localStorage.getItem('NUWE_TKN')!.split(' ')[1]
        const userId = JSON.parse(atob(token!.split('.')[1]))!
        const owner = await fetchData(`https://nuwe-server.herokuapp.com/api/user/${userId._id}`)
        handleLogin({ token, user: owner })
      }
      setPayload(repos)
    }, 400)

    return () => clearTimeout(timer)
  }, [currentUser])

  return { payload, error }
}
