import React from 'react';
import {
  makeStyles,
  ListItemIcon,
  List,
  ListItemText,
  Divider,
  Box,
  ListItem,
  ListItemSecondaryAction,
  Icon,
  IconButton,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { IconLink } from './IconLink';
import { LinkData } from '../models/Link';

const useStyles = makeStyles({
  root: {
    color: '#fff',
  },
  box: {
    maxWidth: '400px',
    margin: '0 auto',
  },
});

export const LinkLayout: React.FC = () => {
  const { root, box } = useStyles();

  return (
    <div className={root}>
      {LinkData.map(link => (
        <Box className={box} key={link.title}>
          <List component="nav" aria-label="nav">
            <ListItem>
              <ListItemIcon>
                <IconLink
                  title={link.title}
                  url={link.link}
                  className={link.iconClassName}
                />
              </ListItemIcon>
              <ListItemText primary={link.title} />
              <ListItemSecondaryAction>
                <IconLink
                  title={link.title}
                  url={link.link}
                  className="fas fa-link"
                />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </List>
        </Box>
      ))}
      <Box className={box}>
        <List component="nav" aria-label="nav">
          <ListItem>
            <ListItemIcon>
              <Link to="/privacypolicy">
                <IconButton>
                  <Icon className="fas fa-user" />
                </IconButton>
              </Link>
            </ListItemIcon>
            <ListItemText primary="Privacy Policy" />
            <ListItemSecondaryAction>
              <Link to="/privacypolicy">
                <IconButton>
                  <Icon className="fas fa-link" />
                </IconButton>
              </Link>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </List>
      </Box>
    </div>
  );
};
