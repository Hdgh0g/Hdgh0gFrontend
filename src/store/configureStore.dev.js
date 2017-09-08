import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import promisesMiddleware from '../middleware/promises'

import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promisesMiddleware, createLogger())
);

if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers').default;
    store.replaceReducer(nextRootReducer)
  })
}

export default store;
