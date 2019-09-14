import React, { useEffect, useState } from 'react';
import {
  createStyles,
  makeStyles,
  Grid,
  CircularProgress,
  Hidden,
} from '@material-ui/core';
import { GithubChart } from './GithubChart';
import { Nokogiri } from './Nokogiri';
import { fetchRepository } from '../services/Github';
import { createChartData, options, width, height } from '../models/ChartData';
import { GrassGraph } from './GrassGraph';

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
  const [isLoading, setLoadingStatus] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoadingStatus(true);
    fetchRepository().then(response => {
      setData(createChartData(response.data));
      setLoadingStatus(false);
    });
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isLoading ? (
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
      ) : (
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
              data={data}
              options={options}
              width={width}
              height={height}
            />
          </Grid>
        </Grid>
      )}
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <GrassGraph />
        </Grid>
      </Grid>
    </div>
  );
};
