import { Types } from "./actions";

const HaikusReducer = (state = {}, action) => {
	Object.freeze(state);
	const newState = Object.assign({}, state);
	switch (action.type) {
		case Types.RECEIVE_HAIKUS:
      const haikus = action.haikus.data;
			return Object.assign({}, state, haikus);
		case Types.RECEIVE_HAIKU:
			const haiku  = action.haiku.data;
			return Object.assign({}, state, { [haiku._id]: haiku }  );
		case Types.REMOVE_HAIKU:
				const { haikuId } = action;
				delete newState[haikuId];
				return newState;
		default:
			return state;
	}
};

export default HaikusReducer;

