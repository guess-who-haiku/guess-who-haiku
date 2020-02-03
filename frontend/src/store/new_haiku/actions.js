import { createActions } from 'reduxsauce';
import * as APIUtil from './api_util';

export const { Types, Creators } = createActions({
  receiveNewHaiku: ['haiku']
}, { prefix: '[NEW HAIKU] ' })


export const Thunks = {};

Thunks.fetchNewHaiku = (authors) => dispatch =>
  APIUtil.getNewHaiku(authors)
    .then(({ data: haiku }) => dispatch(Creators.receiveNewHaiku(haiku)))
    .catch(err => console.log(err));
