// frontend/auth/login.js
import API from '../api/axios';

export const loginUser = async (data) => {
  return await API.post('/auth/login', data);
};
