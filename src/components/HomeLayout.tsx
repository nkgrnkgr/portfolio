import React from 'react';
import { Grid } from 'semantic-ui-react';

export const HomeLayout: React.FC<{}> = () => {
  return (
    <Grid doubling cloumns={5} style={{ height: '100px' }}>
      <Grid.Column mobile={16} tablet={8} computer={8}>
        <div>abc</div>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={8}>
        <div>cde</div>
      </Grid.Column>
    </Grid>
  );
};
