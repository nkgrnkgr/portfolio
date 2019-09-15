import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';

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
      </Box>
    </div>
  );
};
