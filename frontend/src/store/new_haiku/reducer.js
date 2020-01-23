import { Types } from "./actions";

const _initialState = null;
const NewHaikuReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Types.RECEIVE_NEW_HAIKU:
      const { haiku } = action;
      return haiku;
    default:
      return state;
  }
};

export default NewHaikuReducer;
