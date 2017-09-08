import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promisesMiddleware from '../middleware/promises'

import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promisesMiddleware)
);

export default store;
