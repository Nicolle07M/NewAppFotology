import axios from 'axios';

const ApiFotology = axios.create({
    baseURL: 'http://192.168.101.85:3001/api',

    headers: {
    'Content-Type': 'application/json'
    }

});
export {ApiFotology};