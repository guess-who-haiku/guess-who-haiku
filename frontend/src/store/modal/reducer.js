import { Types } from './actions'

const _initialState = null;

const ModalReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  console.log("reducer", action);
  switch (action.type) {
    case Types.OPEN_MODAL:
      const { modal, haikuId } = action;
      nextState['component'] = modal;
      nextState['haikuId'] = haikuId;
      return nextState;
    case Types.CLOSE_MODAL:
      return _initialState;
    default:
      return state;
  }
}

export default ModalReducer;