import React from 'react';
import { makeStyles, Box, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export const PrivacyPolicyPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box>
        <Typography
          align="center"
          color="textPrimary"
          variant="h2"
          gutterBottom
        >
          Privacy Policy
        </Typography>
        <Paper>
          <Typography variant="h5" component="h5">
            私たちについて
          </Typography>
          <Typography component="p">
            当サイトのサイトアドレスは https://www.nkgr.app です。
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};
