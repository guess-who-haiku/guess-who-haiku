import axios from "axios";

export const getNewHaiku = (authors) => {
    authors = authors.map((author, idx) => (
        `author${idx + 1}=${author}`
    )).join('&');
    return axios.get(`/api/haikus/new?${authors}`);
};
