import axios from "axios";

export const getHaiku = (haikuId) => {
    return axios.get(`/api/haikus/${haikuId}`);
};

export const getHaikusUser = (userId) => {
    return axios.get(`/api/haikus/user/${userId}`);
};

export const getHaikuChallenges = (haikus) => {
    haikus = haikus
    .map((haiku, idx) => `haiku${idx+1}=${haiku}`)
    .join("&");
    return axios.get(`/api/haikus/challenges?${haikus}`);
};

export const createHaiku = haiku => {
    return axios.post("/api/haikus/create", haiku);
};

export const deleteHaiku = haikuId => {
    return axios.delete(`/api/haikus/${haikuId}`);
};

export const createHaikuShares = (haikuId, recipientIds) => {

    console.log('INSIDE API UTIL CREATE HAIKU SHARES');
    console.log('HAIKU IDS & RECIP IDS', haikuId, recipientIds);
    return axios.post(`/api/shares`, { haikuId, recipientIds });
};

export const updateHaikuShare = (haikuId, userId, complete, openTimestamp, completeTimestamp) => {
    return axios.patch(`/api/shares/${haikuId}`, { userId, complete, openTimestamp, completeTimestamp });
};