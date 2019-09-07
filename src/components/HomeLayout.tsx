import React, { useEffect, useState } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import { GithubChart } from './GithubChart';
import { Nokogiri } from './Nokogiri';
import { fetchRepository } from '../services/Github';
import { createChartData, options, width, height } from '../models/ChartData';
import { GrassGraph } from './GrassGraph';

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

  return (
    <Grid verticalAlign="middle" doubling cloumns={5}>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Nokogiri />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          {isLoading ? (
            <Loader />
          ) : (
            <GithubChart
              data={data}
              options={options}
              width={width}
              height={height}
            />
          )}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column only="tablet cumputer" tablet={16} computer={16}>
          <GrassGraph />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
