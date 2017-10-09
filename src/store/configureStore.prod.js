import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promisesMiddleware from '../middleware/promises'
import authorizedPromisesMiddleware from '../middleware/authorizedPromises'


import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promisesMiddleware, authorizedPromisesMiddleware)
);

export default store;
