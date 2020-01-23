import { RECEIVE_AUTHORS } from './actions';

const AuthorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_AUTHORS:
            return Object.assign({}, action.authors)
        default:
            return state;
    }
};

export default AuthorsReducer;