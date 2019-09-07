import React from 'react';
import { Grid, Container, Header } from 'semantic-ui-react';
import { PortFolioCard } from './PortfolioCard';
import { portfolioData } from '../models/Portfolio';

export const PortFolioLayout: React.FC<{}> = () => {
  return (
    <div
      style={{
        margin: '40px 80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <Header inverted textAlign="center" as="h1">
          Portfolio
        </Header>
        <Grid doubling cloumns={4}>
          {portfolioData.map(item => {
            const {
              title,
              date,
              comment,
              linkUrl,
              githubUrl,
              image,
              chips,
            } = item;

            return (
              <Grid.Column key={title} mobile={16} tablet={8} computer={4}>
                <PortFolioCard
                  title={title}
                  imageUrl={image.url}
                  description={comment}
                  published={date}
                  tags={chips}
                  githubUrl={githubUrl}
                  linkUrl={linkUrl}
                />
              </Grid.Column>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};
