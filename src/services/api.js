import axios from 'axios';

const api = axios.create({
  baseURL: 'https://klrentacar.com.br/sistema/api/',
  
});

export default api;