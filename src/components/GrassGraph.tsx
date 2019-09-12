import React from 'react';
import { Typography, Box, Link } from '@material-ui/core';

export const GrassGraph: React.FC = () => {
  return (
    <div style={{ margin: '60px 0px' }}>
      <Typography variant="h4" color="textPrimary">
        Contributions in {new Date().getFullYear()}
      </Typography>
      <Box style={{ padding: '10px', backgroundColor: '#fff', margin: '10px' }}>
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
