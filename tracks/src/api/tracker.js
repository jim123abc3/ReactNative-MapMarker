import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  // use ngrok to tunnel your local server, then paste the ngrok link below
  baseURL: 'https://1d62-2a00-23c6-f08e-3301-3009-d7af-d895-f624.eu.ngrok.io'
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
)

export default instance;