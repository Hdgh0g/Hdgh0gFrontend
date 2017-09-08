import api from '../api';
import * as actionTypes from '../actions/actionTypes'

export const TECHNOLOGIES_LOADING = 'TECHNOLOGIES_LOADING';
export const TECHNOLOGIES_LOADED = 'TECHNOLOGIES_LOADED';
export const TECHNOLOGIES_LOAD_FAILURE = 'TECHNOLOGIES_LOAD_FAILURE';

export const getTechnologies = () => {
  return {
    type: actionTypes.PROMISE,
    actions: [TECHNOLOGIES_LOADING, TECHNOLOGIES_LOADED, TECHNOLOGIES_LOAD_FAILURE],
    payload: api.getTechnologies(),
  };
};
