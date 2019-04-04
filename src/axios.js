import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-todos-6b801.firebaseio.com/'
});

export default instance;