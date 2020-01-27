import { createActions } from 'reduxsauce';
import * as APIUtil from './api_util';
import { Creators as NewHaikuCreators } from '../new_haiku/actions';

export const { Types, Creators } = createActions({
  receiveHaikus: ['haikus'],
  receiveHaiku: ['haiku'],
  removeHaiku: ['haikuId']
}, { prefix: '[HAIKUS] ' })

// const RECEIVE_HAIKUS = '[HAIKUS] RECEIVE_HAIKUS';

// const receiveHaikus = haikus = ({
//   type: RECEIVE_HAIKUS,
//   haikus
// })

export const Thunks = {};

Thunks.fetchHaiku = (haikuId) => dispatch =>
  APIUtil.getHaiku(haikuId)
    .then(({ data: haiku }) => dispatch(Creators.receiveHaiku(haiku)))
    .catch(err => console.log(err));

Thunks.fetchHaikusUser = (userId) => dispatch =>
  APIUtil.getHaikusUser(userId)
    .then(({ data: haikus }) => dispatch(Creators.receiveHaikus(haikus)))
    .catch(err => console.log(err));

Thunks.fetchHaikuChallenges = (haikus) => dispatch =>
  APIUtil.getHaikuChallenges(haikus)
    .then(({ data: haikus }) => dispatch(Creators.receiveHaikus(haikus)))
    .catch(err => console.log(err));

Thunks.createHaiku = (haiku) => dispatch =>
  APIUtil.createHaiku(haiku)
    .then(({ data: haiku }) => dispatch(Creators.receiveHaiku(haiku)))
    .then(haiku => dispatch(NewHaikuCreators.receiveNewHaiku(haiku)))
    .catch(err => console.log(err));

Thunks.deleteHaiku = (haikuId) => dispatch =>
  APIUtil.deleteHaiku(haikuId)
    .then(({ data: { _id } }) => dispatch(Creators.removeHaiku(_id)))
    .catch(err => console.log(err));

Thunks.createHaikuShares = (haikuId, recipientIds) => dispatch =>
  APIUtil.createHaikuShares(haikuId, recipientIds)
    .then(({ data: haiku }) => dispatch(Creators.receiveHaiku(haiku)))
    .catch(err => console.log(err));

Thunks.updateHaikuShare = (haikuId, userId, complete, openTS, completeTS) => dispatch =>
  APIUtil.updateHaikuShare(haikuId, userId, complete, openTS, completeTS)
    .then(({ data: haiku }) => dispatch(Creators.receiveHaiku(haiku)))
    .catch(err => console.log(err));