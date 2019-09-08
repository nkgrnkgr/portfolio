import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Avatar, Icon } from '@material-ui/core';
import logo from '../images/logo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    avatar: {
      margin: 10,
    },
    title: {
      flexGrow: 1,
    },
    iconLink: {
      color: '#fff',
    },
  }),
);

export const PageHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Avatar alt="nokogiri" src={logo} className={classes.avatar} />
          <Typography variant="h6" className={classes.title}>
            Nokogiri
          </Typography>
          <a
            aria-label="github"
            href="https://github.com/nkgrnkgr"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.iconLink}
          >
            <Icon className="fab fa-github" />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};
