import { getNewHaiku, getHaiku, getHaikusUser, createHaiku, deleteHaiku } from "./api_util";

export const RECEIVE_HAIKUS = "RECEIVE_HAIKUS";
export const RECEIVE_HAIKU = "RECEIVE_HAIKU";
export const RECEIVE_NEW_HAIKU = "RECEIVE_NEW_HAIKU";

export const receiveHaikus = haikus => ({
  type: RECEIVE_HAIKUS,
  haikus
});

export const receiveHaiku = haiku => ({
  type: RECEIVE_HAIKU,
  haiku
});

export const receiveNewHaiku = haiku => ({
  type: RECEIVE_NEW_HAIKU,
  haiku
});

export const fetchNewHaiku = (authors) => dispatch =>
  getNewHaiku(authors)
    .then(haiku => dispatch(receiveNewHaiku(haiku)))
    .catch(err => console.log(err));

export const fetchHaiku = (haikuId) => dispatch =>
  getHaiku(haikuId)
    .then(haiku => dispatch(receiveHaiku(haiku)))
    .catch(err => console.log(err));

export const fetchHaikusUser = (userId) => dispatch =>
  getHaikusUser(userId)
    .then(haikus => dispatch(receiveHaikus(haikus)))
    .catch(err => console.log(err));

export const createHaiku = (haiku) => dispatch =>
  createHaiku(haiku)
    .then(haiku => dispatch(receiveHaiku(haiku)))
    .catch(err => console.log(err));

export const deleteHaiku = (haikuId) => dispatch =>
  deleteHaiku(haikuId)
    .then(res => {
        window.location.reload();
    })
    .catch(err => console.log(err));