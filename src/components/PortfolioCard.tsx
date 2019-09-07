import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  published: string;
  tags: string[];
  githubUrl: string;
  linkUrl: string;
}

export const PortFolioCard: React.FC<Props> = ({
  imageUrl,
  title,
  description,
  published,
  tags,
  githubUrl,
  linkUrl,
}) => {
  return (
    <Card>
      <Image src={imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{published}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={githubUrl}>
          <Icon name="github" />
          Github
        </a>
        <a href={linkUrl}>
          <Icon name="github alternate" />
          Link
        </a>
      </Card.Content>
    </Card>
  );
};
