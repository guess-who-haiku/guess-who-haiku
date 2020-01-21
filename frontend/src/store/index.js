import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root_reducer';

const configureStore = (preloadedState = {}) => {
  let middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
  }
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );
}

export default configureStore;