import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '10vh',
  },
});

export const PageFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body2" color="textPrimary">
        {`© ${new Date().getFullYear()} ︎Nokogiri`}
      </Typography>
    </div>
  );
};
