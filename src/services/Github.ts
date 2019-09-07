import axios from 'axios';

const BASE_URL =
  'https://uslokrb2q1.execute-api.ap-northeast-1.amazonaws.com/prod/githubrepos';

export const fetchRepository = () => axios.get(BASE_URL);
