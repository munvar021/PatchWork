import axios from 'axios';

import { showToast } from '../utils/toastUtils';

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (userData) => {
  try {
    const res = await api.post('/api/auth/login', userData);
    return res.data;
  } catch (error) {
    showToast(error.response?.data?.msg || "Login failed", 'error');
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const res = await api.post('/api/auth/register', userData);
    showToast("Registration successful! Please log in.", 'success');
    return res.data;
  } catch (error) {
    showToast(error.response?.data?.msg || "Registration failed", 'error');
    throw error;
  }
};

export default api;