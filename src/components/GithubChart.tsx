import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Typography, createStyles, makeStyles } from '@material-ui/core';
import { GithubIconLink } from './GithubIconLink';

export interface GithubChartProps {
  data: {
    labels: string[];
    datasets: DataSet[];
  } | null;
  options: {};
  width: number;
  height: number;
}

interface DataSet {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}

const useStyles = makeStyles(() =>
  createStyles({
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    typo: {
      margin: '5px',
    },
  }),
);

export const GithubChart: React.FC<GithubChartProps> = ({
  data,
  options,
  width,
  height,
}) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.flex}>
        <Typography
          className={classes.typo}
          color="textSecondary"
          variant="h5"
          gutterBottom
        >
          Languages In
        </Typography>
        <GithubIconLink />
      </div>
      {data && (
        <Doughnut data={data} width={width} height={height} options={options} />
      )}
    </div>
  );
};
