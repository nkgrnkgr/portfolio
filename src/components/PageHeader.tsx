import React from 'react';
import { Avatar, Link, Tooltip } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NOT_EXSIT_IN_MENU } from '../contexts/ActiveMenuProvider';
import logo from '../images/logo.svg';
import { HideOnScroll } from './HideOnScroll';
import { IconLink } from './IconLink';
import { TabLayout } from './TabLayout';

interface Props {
  activeMenuIndex: number;
  handleOnClickMenu: (index: number) => void;
}
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

export const PageHeader: React.FC<Props> = ({
  activeMenuIndex,
  handleOnClickMenu,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HideOnScroll>
        <AppBar color="default">
          <Toolbar>
            <Tooltip title="home">
              <Link href="/">
                <Avatar alt="nokogiri" src={logo} className={classes.avatar} />
              </Link>
            </Tooltip>
            <Typography variant="h6" className={classes.title}>
              Nokogiri
            </Typography>
            <IconLink
              title="github"
              url="https://github.com/nkgrnkgr/portfolio"
              className="fab fa-github"
            />
          </Toolbar>
          {activeMenuIndex !== NOT_EXSIT_IN_MENU && (
            <TabLayout
              activeMenuIndex={activeMenuIndex}
              handleOnClickMenu={handleOnClickMenu}
            />
          )}
        </AppBar>
      </HideOnScroll>
    </div>
  );
};
