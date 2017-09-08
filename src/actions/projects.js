import api from '../api'
import * as actionTypes from '../actions/actionTypes'

export const PROJECTS_LOADING = 'PROJECTS_LOADING';
export const PROJECTS_LOADED = 'PROJECTS_LOADED';
export const PROJECTS_LOAD_FAILURE = 'PROJECTS_LOAD_FAILURE';

export const getProjects = () => {
  return {
    type: actionTypes.PROMISE,
    actions: [PROJECTS_LOADING, PROJECTS_LOADED,PROJECTS_LOAD_FAILURE],
    payload: api.getProjects(),
  };
};
