import api from '../api';
import * as actionTypes from '../actions/actionTypes'

export const TECHNOLOGIES_LOADING = 'TECHNOLOGIES_LOADING';
export const TECHNOLOGIES_LOADED = 'TECHNOLOGIES_LOADED';
export const TECHNOLOGIES_LOAD_FAILURE = 'TECHNOLOGIES_LOAD_FAILURE';
export const TECHNOLOGY_REMOVING = 'TECHNOLOGY_REMOVING';
export const TECHNOLOGY_REMOVED = 'TECHNOLOGY_REMOVED';
export const TECHNOLOGY_REMOVE_FAILURE = 'TECHNOLOGY_REMOVE_FAILURE';

export const getTechnologies = () => {
  return {
    type: actionTypes.PROMISE,
    actions: [TECHNOLOGIES_LOADING, TECHNOLOGIES_LOADED, TECHNOLOGIES_LOAD_FAILURE],
    payload: api.getTechnologies(),
  };
};

export const removeTechnology = (id) => {
  return {
    type: actionTypes.AUTHORIZED_PROMISE,
    actions: [TECHNOLOGY_REMOVING, TECHNOLOGY_REMOVED, TECHNOLOGY_REMOVE_FAILURE],
    payload: (credentials) => api.removeTechnology(credentials, id)
  }
};
