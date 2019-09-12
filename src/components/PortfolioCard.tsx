import React from 'react';
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: '200px',
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
      <CardActionArea href={linkUrl}>
        <CardMedia className={classes.media} image={imageUrl} title="title" />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          component="p"
          color="textSecondary"
        >
          {published}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          component="p"
          color="textSecondary"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
