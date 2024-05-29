import axios from 'axios';

const ApiFotology = axios.create({
    baseURL: 'http://10.175.83.151:3001/api',

    headers: {
    'Content-Type': 'application/json'
    }

});
export {ApiFotology};