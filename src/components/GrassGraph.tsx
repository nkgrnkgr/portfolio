import React from 'react';
import { Typography, Box, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maring: '60px 0px',
  },
  image: { padding: '10px', backgroundColor: '#fff', margin: '10px' },
});

export const GrassGraph: React.FC = () => {
  const { root, image } = useStyles();

  return (
    <div className={root}>
      <Typography variant="h4" color="textPrimary">
        Contributions in {new Date().getFullYear()}
      </Typography>
      <Box className={image}>
        <Link href="https://github.com/nkgrnkgr" target="_blank" rel="noopener">
          <img
            src="https://grass-graph.moshimo.works/images/nkgrnkgr.png"
            alt="githubcontribution"
            width="100%"
          />
        </Link>
      </Box>
    </div>
  );
};
