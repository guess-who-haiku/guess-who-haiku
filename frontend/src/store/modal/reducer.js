import { Types } from './actions'

const _initialState = null;

const ModalReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Types.OPEN_MODAL:
      const { modal } = action;
      return modal;
    case Types.CLOSE_MODAL:
      return _initialState;
    default:
      return state;
  }
}

export default ModalReducer;