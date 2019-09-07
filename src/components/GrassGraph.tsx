import React from 'react';
import { Image, Header } from 'semantic-ui-react';

export const GrassGraph: React.FC = () => {
  return (
    <div style={{ margin: '60px' }}>
      <Header as="h2" inverted>
        Contributions in {new Date().getFullYear()}
      </Header>
      <Image
        src="https://grass-graph.moshimo.works/images/nkgrnkgr.png"
        fluid
        bordered
        style={{ padding: '10px', background: '#fff' }}
      />
    </div>
  );
};
