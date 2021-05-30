import { Button } from '@components/button/Button'
import { Input } from '@components/input/Input'
import { Modal } from '@components/modal/Modal'
import { RepoForm } from '@components/repo-form/RepoForm'
import { Repos } from '@components/repos/Repos'
import { UserCard } from '@components/user/User'
import { NewRepo } from '@models/new-repo'
import AuthContext from 'context/auth-context'
import { useGithub } from 'hooks/use-github'
import React, { FormEvent, useCallback, useContext, useState } from 'react'

export const Github = () => {
  const { user } = useContext(AuthContext)

  const [userInput, setUserInput] = useState<string>(user?.username || '')
  const [modalOpen, setModalOpen] = useState(false)
  const { payload, error } = useGithub(user)

  const getGithubUser = useCallback((event: FormEvent<HTMLInputElement>) => {
    setUserInput(event.currentTarget.value)
  }, [])

  const addRepo = async (newRepo: NewRepo) => {
    setModalOpen(false)
    const repo = {
      name: newRepo.name,
      description: newRepo.description,
      stack: [newRepo.language],
      author: newRepo.author,
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('NUWE_TKN')!,
      },
      body: JSON.stringify(repo),
    }
    const response = await fetch('https://nuwe-htsv3-api.herokuapp.com/repository', requestOptions)
    if (response.ok) {
      setUserInput('')
    }
  }

  return (
    <div className='App'>
      <Input label="Github's username" type='text' onChange={getGithubUser} value={userInput} />
      <>
        {user?.username && (
          <UserCard>
            <Button onClick={() => setModalOpen(true)}>+ Add Repo</Button>
          </UserCard>
        )}
        {payload?.length && <Repos repos={payload} />}
      </>

      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <RepoForm onSubmit={addRepo} />
        </Modal>
      )}
    </div>
  )
}
