import { useState, useEffect } from 'react';
import axios from 'axios';

export type GithubReposites = {
  [key: string]: number;
};

const BASE_URL =
  'https://uslokrb2q1.execute-api.ap-northeast-1.amazonaws.com/prod/githubrepos';

export const useGithubRepositories = () => {
  const [isLoading, setLoadingStatus] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<GithubReposites>({});

  useEffect(() => {
    (async () => {
      setLoadingStatus(true);
      try {
        const response = await axios.get<GithubReposites>(BASE_URL);
        setData(response.data);
        setError(null);
      } catch (e) {
        setError(e);
      }
      setLoadingStatus(false);
    })();
  }, []);

  return { githubRepositories: data, isLoading, error };
};
