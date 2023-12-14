import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://192.168.0.104:8000/api' });