import React from 'react';
import { Grid } from 'semantic-ui-react';
import { GithubChart } from './GithubChart';
import { Nokogiri } from './Nokogiri';

const a = {
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {},
};

export const HomeLayout: React.FC = () => {
  return (
    <Grid verticalAlign="middle" doubling cloumns={5}>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Nokogiri />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <GithubChart data={a.data} options={{}} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
