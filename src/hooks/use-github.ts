import { Repository } from '@models/repository'
import { User } from '@models/user'
import AuthContext from 'context/auth-context'
import { useCallback, useContext, useEffect, useState } from 'react'

export const useGithub = (currentUser: User | null) => {
  const { handleLogin } = useContext(AuthContext)
  const [payload, setPayload] = useState<Repository[] | null>(null)
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
      // const repos = await fetchData('https://nuwe-htsv3-api.herokuapp.com/repositorys')
      if (!currentUser) {
        const token = localStorage.getItem('NUWE_TKN')!.split(' ')[1]
        // const userId = JSON.parse(atob(token!.split('.')[1]))!
        const owner = await fetchData('https://nuwe-htsv3-api.herokuapp.com/user')
        handleLogin({ token, user: owner.user })
        // setPayload(repos)
      }
    }, 400)

    return () => clearTimeout(timer)
  }, [currentUser])

  return { payload, error }
}
