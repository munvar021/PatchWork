import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (userData) => {
  const res = await api.post('/api/auth/login', userData);
  return res.data;
};

export const registerUser = async (userData) => {
  const res = await api.post('/api/auth/register', userData);
  return res.data;
};

export default api;