import api from '../api'
import * as actionTypes from '../actions/actionTypes'

export const CONTACTS_LOADING = 'CONTACTS_LOADING';
export const CONTACTS_LOADED = 'CONTACTS_LOADED';
export const CONTACTS_LOAD_FAILURE = 'CONTACTS_LOAD_FAILURE';
export const CONTACT_UPLOADING = 'CONTACT_UPLOADING';
export const CONTACT_UPLOADED = 'CONTACT_UPLOADED';
export const CONTACT_UPLOAD_FAILURE = 'CONTACT_UPLOAD_FAILURE';
export const CONTACT_REMOVING = 'CONTACT_REMOVING';
export const CONTACT_REMOVED = 'CONTACT_REMOVED';
export const CONTACT_REMOVE_FAILURE = 'CONTACT_REMOVE_FAILURE';

export const getContacts = () => {
  return {
    type: actionTypes.PROMISE,
    actions: [CONTACTS_LOADING, CONTACTS_LOADED, CONTACTS_LOAD_FAILURE],
    payload: api.getContacts(),
  };
};

export const postContact = (contact) => {
  return {
    type : actionTypes.AUTHORIZED_PROMISE,
    actions: [CONTACT_UPLOADING, CONTACT_UPLOADED, CONTACT_UPLOAD_FAILURE],
    payload: (credentials) => api.postContact(credentials, contact)
  }
};

export const removeContact = (id) => {
  return {
    type: actionTypes.AUTHORIZED_PROMISE,
    actions: [CONTACT_REMOVING, CONTACT_REMOVED, CONTACT_REMOVE_FAILURE],
    payload: (credentials) => api.removeContact(credentials, id)
  }
};
