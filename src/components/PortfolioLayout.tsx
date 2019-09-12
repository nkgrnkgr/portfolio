import React from 'react';
import { Typography, makeStyles, createStyles, Grid } from '@material-ui/core';
import { PortFolioCard } from './PortfolioCard';
import { portfolioData } from '../models/Portfolio';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export const PortFolioLayout: React.FC<{}> = () => {
  const { root } = useStyles();

  return (
    <div className={root}>
      <Typography align="center" color="textPrimary" variant="h2" gutterBottom>
        Portfolio
      </Typography>
      <Grid container spacing={3} direction="row" alignItems="flex-start">
        {portfolioData.map(d => {
          const { title, date, comment, linkUrl, githubUrl, image, chips } = d;

          return (
            <Grid item xs={12} sm={3} key={title}>
              <PortFolioCard
                imageUrl={image.url}
                title={title}
                description={comment}
                published={date}
                tags={chips}
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
