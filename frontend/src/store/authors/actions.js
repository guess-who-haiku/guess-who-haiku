import { createActions } from 'reduxsauce';
import * as APIUtil from './api_util';

export const { Types, Creators } = createActions({
    receiveAuthors: ['authors']
}, { prefix: '[AUTHORS] ' });

export const Thunks = {};
Thunks.fetchAuthors = () => dispatch => (
    APIUtil.getAuthors()
        .then(({ data: authors }) => dispatch(Creators.receiveAuthors(authors)))
        .catch(errs => console.log(errs))
)