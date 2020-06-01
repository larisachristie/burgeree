import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://burgeree.firebaseio.com',
})

export default axiosInstance;