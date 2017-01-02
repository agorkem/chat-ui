import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
  /* eslint-disable no-underscore-dangle, no-undef */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable no-underscore-dangle, no-undef */

  const middlewares = [thunk, createLogger(), routerMiddleware(browserHistory)];

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store;
};

export default configureStore;
