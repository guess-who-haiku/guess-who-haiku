import axios from "axios";

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

export const createHaikuShares = (haikuId, recipientIds) => {
    return axios.post(`/api/shares`, { haikuId, recipientIds });
};

export const updateHaikuShare = (haikuId, userId) => {
    return axios.patch(`/api/shares/${haikuId}`, { userId });
};