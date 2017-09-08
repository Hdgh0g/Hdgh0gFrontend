import * as actionTypes from '../actions/actionTypes'
import store from '../store/configureStore.js'

const middleware = state => next => action => {
  if (action.type !== actionTypes.PROMISE) {
    return next(action);
  }

  const [startAction, successAction, failureAction] = action.actions;

  store.dispatch({
    type: startAction,
  });

  action.payload.then((payload) => {
    store.dispatch({
      type: successAction,
      payload,
    })
  }, (error) => {
    store.dispatch({
      type: failureAction,
      error,
    })
  });

};

export default middleware;
