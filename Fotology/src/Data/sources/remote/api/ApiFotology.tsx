import axios from 'axios';

const ApiFotology = axios.create({
    baseURL: 'http://192.168.0.16:3001/api',

    headers: {
    'Content-Type': 'application/json'
    }

});
export {ApiFotology};