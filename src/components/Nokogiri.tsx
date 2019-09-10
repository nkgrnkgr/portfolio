import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    textAlign: 'center',
  },
});

export const Nokogiri: React.FC<{}> = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Typography color="textPrimary" variant="h2" gutterBottom>
        Nokogiri
      </Typography>
      <Typography color="textPrimary" variant="h3" gutterBottom>
        Software Engineer
        <span role="img" aria-label="programmer">
          👨🏻‍💻
        </span>
      </Typography>
      <Typography color="secondary" variant="h5" gutterBottom>
        TypeScript / React / Java / Vim
      </Typography>
    </div>
  );
};
