import React from 'react';
import { Icon, makeStyles, createStyles } from '@material-ui/core';

const useStyle = makeStyles(() =>
  createStyles({
    iconLink: {
      color: '#fff',
    },
  }),
);

export const GithubIconLink: React.FC = () => {
  const classes = useStyle();

  return (
    <a
      aria-label="github"
      href="https://github.com/nkgrnkgr"
      target="_blank"
      rel="noopener noreferrer"
      className={classes.iconLink}
    >
      <Icon className="fab fa-github" />
    </a>
  );
};
