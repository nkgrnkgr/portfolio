import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Avatar, Tooltip, Link } from '@material-ui/core';
import logo from '../images/logo.svg';
import { TabLayout } from './TabLayout';
import { HideOnScroll } from './HideOnScroll';
import { IconLink } from './IconLink';

interface Props {
  menuItems: string[];
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
  menuItems,
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
              url="https://github.com/nkgrnkgr"
              className="fab fa-github"
            />
          </Toolbar>
          <TabLayout
            menuItems={menuItems}
            activeMenuIndex={activeMenuIndex}
            handleOnClickMenu={handleOnClickMenu}
          />
        </AppBar>
      </HideOnScroll>
    </div>
  );
};
