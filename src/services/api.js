import axios from 'axios';

const httpOptions ={
  headers:{
    'Content-Type': 'application/json',
    Authorization: 'Basic S2wgUmVudCBhIENhcmt1bjpEUUNhWXQyY1lYcWI2ZXM0',
    Accept: 'aplication/json'
  }
}

const api = axios.create({
  baseURL: 'https://klrentacar.com.br/sistema/api/',
  
});

export default api;