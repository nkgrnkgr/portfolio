import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Header, Image } from 'semantic-ui-react';
import githublogo from '../images/github-logo.svg';

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

export const GithubChart: React.FC<GithubChartProps> = ({
  data,
  options,
  width,
  height,
}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header as="h2" inverted>
        <a
          href="https://github.com/nkgrnkgr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Languages in </span>
          <Image src={githublogo} style={{ width: '24px' }} avatar />
        </a>
      </Header>
      {data && (
        <Doughnut data={data} width={width} height={height} options={options} />
      )}
    </div>
  );
};
