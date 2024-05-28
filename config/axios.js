import axios from 'axios';

const axiosIns = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}`,
  withCredentials: true,
});

export { axiosIns };