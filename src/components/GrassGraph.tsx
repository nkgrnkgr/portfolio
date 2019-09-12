import React from 'react';
import { Typography, Box } from '@material-ui/core';

export const GrassGraph: React.FC = () => {
  return (
    <div style={{ margin: '60px' }}>
      <Typography variant="h2" color="textPrimary">
        Contributions in {new Date().getFullYear()}
      </Typography>
      <Box style={{ padding: '10px', backgroundColor: '#fff' }}>
        <img
          src="https://grass-graph.moshimo.works/images/nkgrnkgr.png"
          alt="githubcontribution"
          width="100%"
        />
      </Box>
    </div>
  );
};
