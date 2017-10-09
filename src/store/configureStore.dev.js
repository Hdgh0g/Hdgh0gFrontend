import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import promisesMiddleware from '../middleware/promises'
import authorizedPromisesMiddleware from '../middleware/authorizedPromises'

import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promisesMiddleware, authorizedPromisesMiddleware, createLogger())
);

if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers').default;
    store.replaceReducer(nextRootReducer)
  })
}

export default store;
