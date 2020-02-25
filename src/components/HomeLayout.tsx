import {
  CircularProgress,
  createStyles,
  Grid,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import { useGithubRepositories } from '../hooks/github';
import { createChartData, height, options, width } from '../models/ChartData';
import { GithubChart } from './GithubChart';
import { GrassGraph } from './GrassGraph';
import { Nokogiri } from './Nokogiri';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    loading: {
      minHeight: '600px',
    },
  }),
);

export const HomeLayout: React.FC = () => {
  const { githubRepositories, isLoading, error } = useGithubRepositories();

  const classes = useStyles();

  if (isLoading) {
    return (
      <>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.loading}
        >
          <CircularProgress />
        </Grid>
      </>
    );
  }

  if (error) {
    return <></>;
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Nokogiri />
        </Grid>
        <Grid item xs={12} sm={6}>
          <GithubChart
            data={createChartData(githubRepositories)}
            options={options}
            width={width}
            height={height}
          />
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <GrassGraph />
        </Grid>
      </Grid>
    </div>
  );
};
