import {
  RECEIVE_HAIKUS,
  RECEIVE_HAIKU,
  RECEIVE_NEW_HAIKU
} from "./actions";
import { merge } from "lodash";

const HaikusReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_HAIKUS:
            return Object.assign({}, action.haikus);
        case RECEIVE_HAIKU:
            return merge({}, newState, action.haiku);
        case RECEIVE_NEW_HAIKU:
            newState.new = action.haiku;
            return Object.assign({}, newState);
        default:
            return state;
    }
};

export default HaikusReducer;
