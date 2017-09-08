import api from '../api'
import * as actionTypes from '../actions/actionTypes'

export const CONTACTS_LOADING = 'CONTACTS_LOADING';
export const CONTACTS_LOADED = 'CONTACTS_LOADED';
export const CONTACTS_LOAD_FAILURE = 'CONTACTS_LOAD_FAILURE';

export const getContacts = () => {
  return {
    type: actionTypes.PROMISE,
    actions: [CONTACTS_LOADING, CONTACTS_LOADED, CONTACTS_LOAD_FAILURE],
    payload: api.getContacts(),
  };
};
