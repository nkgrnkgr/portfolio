import React from 'react';
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  makeStyles,
  CardHeader,
  CardActions,
  Chip,
  Box,
} from '@material-ui/core';
import { IconLink } from './IconLink';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    minHeight: '215px',
  },
  box: {
    marginTop: '10px',
  },
  chip: {
    margin: '2px',
  },
});

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  published: string;
  tags: string[];
  githubUrl: string;
  linkUrl: string;
}

export const PortFolioCard: React.FC<Props> = ({
  imageUrl,
  title,
  description,
  published,
  tags,
  githubUrl,
  linkUrl,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title={title} />
      <CardActionArea href={linkUrl}>
        <CardMedia className={classes.media} image={imageUrl} title="title" />
      </CardActionArea>
      <CardContent>
        <Typography
          gutterBottom
          variant="body2"
          component="p"
          color="textSecondary"
        >
          {`Published: ${published}`}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          component="p"
          color="textSecondary"
        >
          {description}
        </Typography>
        <Box className={classes.box}>
          {tags.map(tagName => (
            <Chip
              label={tagName}
              className={classes.chip}
              color="secondary"
              variant="outlined"
              key={tagName}
            />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <IconLink title="github" url={githubUrl} className="fab fa-github" />
        <IconLink title="open app" url={linkUrl} className="fas fa-rocket" />
      </CardActions>
    </Card>
  );
};
