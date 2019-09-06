import React from 'react';
import { Grid } from 'semantic-ui-react';

export const PortFolioLayout: React.FC<{}> = () => {
  return (
    <Grid doubling cloumns={5} style={{ height: '100px' }}>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <div>portfolio1</div>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <div>portfolio2</div>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <div>portfolio3</div>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <div>portfolio4</div>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <div>portfolio5</div>
      </Grid.Column>
    </Grid>
  );
};
