import axios from 'axios';

const api = axios.create({
    baseURL: 'https://login-with-send-email-backend.cyclic.app/'
});

export default api;