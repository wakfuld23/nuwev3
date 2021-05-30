import { Button } from '@components/button/Button'
import { Input } from '@components/input/Input'
import { NewRepo } from '@models/new-repo'
import AuthContext from 'context/auth-context'
import React, { FormEvent, FunctionComponent, useContext, useState } from 'react'

interface RepoFormProps {
  onSubmit: (formState: NewRepo) => void
}

export const RepoForm: FunctionComponent<RepoFormProps> = ({ onSubmit }) => {
  const { user } = useContext(AuthContext)
  const [formState, setFormState] = useState<NewRepo>({
    author: user!._id,
    name: '',
    description: '',
    language: '',
  })

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit(formState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Repository</h1>
      <Input type='text' name='name' label='Name' onChange={handleChange} value={formState.name} />
      <Input
        type='text'
        name='description'
        label='Description'
        onChange={handleChange}
        value={formState.description}
      />
      <Input
        type='text'
        name='language'
        label='Language'
        onChange={handleChange}
        value={formState.language}
      />
      <Button>ADD</Button>
    </form>
  )
}
