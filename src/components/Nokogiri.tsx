import React from 'react';
import { Header } from 'semantic-ui-react';

export const Nokogiri: React.FC<{}> = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header as="h1" style={{ fontSize: '5rem' }} icon inverted>
        Nokogiri
        <br />
      </Header>
      <Header inverted as="h3" style={{ fontSize: '3rem' }}>
        Web Application Engineer
        <span role="img" aria-label="a">
          👨🏻‍💻
        </span>
      </Header>
      <Header inverted as="h4" style={{ fontSize: '2rem' }} color="green">
        TypeScript / React / Java / Vim
      </Header>
    </div>
  );
};
