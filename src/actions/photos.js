import api from '../api'
import * as actionTypes from '../actions/actionTypes'

export const PHOTOS_LOADING = 'PHOTOS_LOADING';
export const PHOTOS_LOADED = 'PHOTOS_LOADED';
export const PHOTOS_LOAD_FAILURE = 'PHOTOS_LOAD_FAILURE';

export const getPhotos = (page) => {
  return {
    type: actionTypes.PROMISE,
    actions: [PHOTOS_LOADING, PHOTOS_LOADED, PHOTOS_LOAD_FAILURE],
    payload: api.getPhotos(page),
  };
};
