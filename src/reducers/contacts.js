import * as actionTypes from '../actions/contacts'

const contacts = (state = {contactsList: [], contactsError: null}, action) => {
  switch (action.type) {
    case actionTypes.CONTACTS_LOADING:
      return {contactsList : [], contactsError : null}
    case  actionTypes.CONTACTS_LOADED:
      return {contactsList : action.payload, contactsError : null};
    case actionTypes.CONTACTS_LOAD_FAILURE:
      return {contactsList : [], contactsError: action.error};
    default:
      return state;
  }
};

export default contacts;
