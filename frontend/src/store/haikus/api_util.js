import axios from "axios";

export const getNewHaiku = (authors) => {
    authors = authors.map( (author,idx) => (
        `author${idx+1}=${author}`
    )).join('&');
  return axios.get(`/api/haikus/new?${authors}`);
};

export const getHaiku = (haikuId) => {
    return axios.get(`/api/haikus/${haikuId}`);
};

export const getHaikusUser = (userId) => {
    return axios.get(`/api/haikus/user/${userId}`);
};

export const createHaiku = haiku => {
  return axios.post("/api/haikus/create", haiku);
};

export const deleteHaiku = haikuId => {
    return axios.delete(`/api/haikus/${haikuId}`);
};