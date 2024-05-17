import axios from 'axios';

export default axios.create({
    baseURL: 'INSERTAR URL',
    headers: { 'Content-type': 'application/json' }
});