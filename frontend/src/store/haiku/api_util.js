import axios from "axios";

export const createHaiku = haiku => {
  return axios.post("/api/haikus/", haiku);
};

export const fetchNewHaiku = (authors) => {
    authors = authors.map( (author,idx) => (
        `author${idx+1}=${author}`
    )).join('&');
  return axios.get(`/api/haikus/new?${authors}`);
};

export const fetchHaikus = (userId) => {

}
