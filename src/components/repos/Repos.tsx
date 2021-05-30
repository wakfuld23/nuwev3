import { RepoCard } from '@components/repo-card/RepoCard'
import { Repository } from '@models/repository'
import React, { FunctionComponent } from 'react'
import classes from './repos.module.scss'

interface ReposProps {
  repos: Repository[]
}
export const Repos: FunctionComponent<ReposProps> = ({ repos }) => (
  <>
    <h2 className={classes.header}>Repos</h2>
    <section className={classes.grid}>
      {repos.map((repo, i) => (
        <RepoCard key={i} repo={repo} />
      ))}
    </section>
  </>
)
