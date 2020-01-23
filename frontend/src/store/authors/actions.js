import { getAuthors } from './api_util';

export const RECEIVE_AUTHORS = "RECEIVE_AUTHORS";

export const receiveAuthors = authors => ({
    type: RECEIVE_AUTHORS,
    authors
});

export const fetchAuthors = () => dispatch => (
    getAuthors(authors)
        .then(authors => dispatch(receiveAuthors(authors)))
        .catch(errs => console.log(errs))
)