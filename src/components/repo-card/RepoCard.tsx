import { GithubRepo } from '@models/github-repo'
import React, { FunctionComponent } from 'react'

import classes from './repo-card.module.scss'

interface RepoCardProps {
  repo: GithubRepo
}

export const RepoCard: FunctionComponent<RepoCardProps> = ({ repo }) => (
  <a className={classes.link} href={repo.html_url} target='_blank'>
    <div className={classes.repoCard}>
      <h3>{repo.name}</h3>
      {repo.language && <p className={classes.language}>{repo.language}</p>}
      <p className={classes.repoId}>ID: {repo.id}</p>
    </div>
  </a>
)
