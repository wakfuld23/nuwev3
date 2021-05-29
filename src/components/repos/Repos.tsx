import React, { FunctionComponent } from 'react'
import { GithubRepo } from '../../models/github-repo'
import { RepoCard } from '../repo-card/RepoCard'
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
