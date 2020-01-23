import axios from 'axios';

export const getAuthors = () => {
    return axios.get('/api/authors/');
};