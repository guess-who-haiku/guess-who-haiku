import { Types } from './actions';

const _initialState = {};
const AuthorsReducer = (state = _initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case Types.RECEIVE_AUTHORS:
            const { authors } = action;
            return Object.assign({}, state, authors)
        default:
            return state;
    }
};

export default AuthorsReducer;