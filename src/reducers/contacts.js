import * as actionTypes from '../actions/contacts'

const contacts = (state = {
  contactsList: [],
  contactsError: null,
  uploadError: null,
  removeError: null
}, action) => {
  switch (action.type) {
    case actionTypes.CONTACTS_LOADING:
      return {
        ...state,
        contactsList: [],
        contactsError: null
      };
    case  actionTypes.CONTACTS_LOADED:
      return {
        ...state,
        contactsList: action.payload,
        contactsError: null
      };
    case actionTypes.CONTACTS_LOAD_FAILURE:
      return {
        ...state,
        contactsList: [],
        contactsError: action.error
      };
    case actionTypes.CONTACT_UPLOAD_FAILURE:
      return {
        ...state,
        uploadError: action.error.title || action.error.message,
      };
    case actionTypes.CONTACT_UPLOADED:
      return {
        ...state,
        contactsList: action.payload,
        contactsError: null,
        uploadError: null
      };
    case actionTypes.CONTACT_UPLOADING:
      return {
        ...state,
        uploadError: null
      };
    case actionTypes.CONTACT_REMOVING:
      return {
        ...state,
        removeError: null
      };
    case actionTypes.CONTACT_REMOVE_FAILURE:
      return {
        ...state,
        removeError: action.error.title || action.error.message,
      };
    case actionTypes.CONTACT_REMOVED:
      return {
        ...state,
        contactsList: action.payload,
        contactsError: null,
        removeError: null
      };
    default:
      return state;
  }
};

export default contacts;
