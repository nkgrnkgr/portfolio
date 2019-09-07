import React from 'react';
import { Image } from 'semantic-ui-react';

export const GrassGraph: React.FC = () => {
  return (
    <div style={{ margin: '60px' }}>
      <Image
        src="https://grass-graph.moshimo.works/images/nkgrnkgr.png"
        fluid
        style={{ padding: '10px', background: '#fff' }}
      />
    </div>
  );
};
