import React from 'react';
import { Typography, makeStyles, createStyles, Grid } from '@material-ui/core';
import { ContensCard } from './ContensCard';
import { ContensModel } from '../models/Contens';

interface Props {
  pageTitle: string;
  contens: ContensModel[];
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    titleStyle: {
      marginBottom: '50px',
    },
  }),
);

export const ContensLayout: React.FC<Props> = ({ pageTitle, contens }) => {
  const { root, titleStyle } = useStyles();

  return (
    <div className={root}>
      <Typography
        align="center"
        color="textPrimary"
        variant="h2"
        gutterBottom
        className={titleStyle}
      >
        {pageTitle}
      </Typography>
      <Grid container spacing={3} direction="row" alignItems="flex-start">
        {contens.map(d => {
          const {
            title,
            published,
            description,
            linkUrl,
            githubUrl,
            imageUrl,
            tags,
          } = d;

          return (
            <Grid item xs={12} sm={3} key={title}>
              <ContensCard
                imageUrl={imageUrl}
                title={title}
                description={description}
                published={published}
                tags={tags}
                githubUrl={githubUrl}
                linkUrl={linkUrl}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
