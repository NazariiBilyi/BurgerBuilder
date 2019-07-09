import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nazar-burger-make.firebaseio.com/'
});

export default instance;


