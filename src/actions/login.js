import api from '../api'
import * as actionTypes from '../actions/actionTypes'

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGGED_OUT = 'LOGGED_OUT';

export const login = (password) => {
  return {
    type: actionTypes.PROMISE,
    actions: [LOGGING_IN, LOGGED_IN,LOGIN_FAILED],
    payload: api.login(password),
  };
};

export const logout = () => ({type: LOGGED_OUT});
