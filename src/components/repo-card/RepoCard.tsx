import React, { FunctionComponent } from 'react'
import { GithubRepo } from '../../models/github-repo'
import classes from './repo-card.module.scss'

interface RepoCardProps {
  repo: GithubRepo
}

export const RepoCard: FunctionComponent<RepoCardProps> = ({ repo }) => (
  <div className={classes.repoCard}>
    <h3>{repo.name}</h3>
    {repo.language && <p className={classes.language}>{repo.language}</p>}
    <p className={classes.repoId}>ID: {repo.id}</p>
  </div>
)
