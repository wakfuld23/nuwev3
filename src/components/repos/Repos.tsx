import { RepoCard } from '@components/repo-card/RepoCard'
import { GithubRepo } from '@models/github-repo'
import React, { FunctionComponent } from 'react'
import classes from './repos.module.scss'

interface ReposProps {
  repos: GithubRepo[]
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
