import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://customized-burger.firebaseio.com/'
});

export default instance;