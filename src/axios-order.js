import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://orange-market-97968-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;