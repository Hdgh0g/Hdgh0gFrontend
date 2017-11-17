import * as actionTypes from '../actions/actionTypes'
import store from '../store/configureStore.js'
import {PROMISE} from "../actions/actionTypes";

const middleware = state => next => action => {
  if (action.type !== actionTypes.AUTHORIZED_PROMISE) {
    return next(action);
  }

  const failureAction = action.actions.slice(-1)[0];

  let credentials = store.getState().admin.password;

  if (credentials) {
    store.dispatch({
      type: PROMISE,
      actions: action.actions,
      payload: action.payload(credentials),
      andThen: action.andThen,
    });
  } else {
    store.dispatch({
      type: failureAction,
      error: {
        message: "Нет сохраненных данных авторизации"
      }
    })
  }
};

export default middleware;
