import axios from "axios";

export const getNewHaiku = (authors) => {
    authors = authors.map((author, idx) => (
        `author${idx + 1}=${author}`
    )).join('&');
    console.log('INSIDE NEW HAIKU API UTIL', authors);
    return axios.get(`/api/haikus/new?${authors}`);
};
