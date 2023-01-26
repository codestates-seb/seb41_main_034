import axios from 'axios';

const BASE_URL =
  'http://ec2-3-34-193-217.ap-northeast-2.compute.amazonaws.com/api/v1';

const accessToken = localStorage.getItem('accessToken');

export const baseAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const authAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${accessToken}`
  }
});
