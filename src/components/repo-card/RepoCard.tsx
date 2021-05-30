import { Repository } from '@models/repository'
import React, { FunctionComponent } from 'react'

import classes from './repo-card.module.scss'

interface RepoCardProps {
  repo: Repository
}

export const RepoCard: FunctionComponent<RepoCardProps> = ({ repo }) => (
  <a className={classes.link} href={repo.url} target='_blank'>
    <div className={classes.repoCard}>
      <h3>{repo.name}</h3>
      {repo.stack.length &&
        repo.stack.map((lang, i) => (
          <p key={i} className={classes.language}>
            {lang.toUpperCase()}
          </p>
        ))}
      <p className={classes.repoId}>ID: {repo._id}</p>
    </div>
  </a>
)
