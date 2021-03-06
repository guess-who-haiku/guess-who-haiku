import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './root_reducer';

const configureStore = (preloadedState = {}) => {
  let middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
  }
  
  const composeEnhancers = process.env.NODE_ENV === "production" ? compose : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
  
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
}

export default configureStore;