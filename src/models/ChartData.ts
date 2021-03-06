import { LanguageColors } from './Language';
import { GithubReposites } from '../hooks/github';

export type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderWidth: number;
  }[];
};

export const createChartData = (repos: GithubReposites): ChartData => {
  const labels = [];
  const data = [];
  const backgroundColor = [];

  /* eslint-disable */
  for (const [key, value] of Object.entries(repos)) {
    if (Object.keys(LanguageColors).indexOf(key) >= 0) {
      labels.push(key);
      data.push(value);
      backgroundColor.push(LanguageColors[key]);
    }
  }
  /* eslint-enable */

  return {
    labels,
    datasets: [
      {
        label: 'Language Ratio',
        data,
        backgroundColor,
        borderWidth: 1,
      },
    ],
  };
};

export const width = 1;
export const height = 1;

export const options = {
  legend: {
    labels: {
      fontColor: '#c9cacc',
    },
  },
};
