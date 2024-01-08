
import axios from 'axios';

const createApiInstance = () => {
  const instance = axios.create({
    baseURL: 'https://bettercity.mikita.dev',
    timeout: 8000,
    headers: { 'Authorization': 'Bearer ' + window.sessionStorage.getItem('token') }
  });

  return instance;
};

export default createApiInstance;