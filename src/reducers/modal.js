import * as actionTypes from '../actions/modal'
import {CONTACT_UPLOADED} from '../actions/contacts'

const modal = (state = {
  contact: {active: false, object: null},
  technology: {active: false, object: null},
  project: {active: false, object: null}
}, action) => {
  switch (action.type) {
    case actionTypes.CONTACT_ADD_PROPERTY :
      return {
        ...state,
        contact: {
          active: true,
          object: {
            ...state.contact.object,
            ...action.payload
          }
        }
      };
    case actionTypes.CONTACT_CHANGE_VISIBILITY :
      return {
        ...state,
        contact: {
          active: action.payload,
          object: null,
        }
      };
    case CONTACT_UPLOADED :
      return {
        ...state,
        contact: {
          active: false,
          object: null
        }
      };
    default:
      return state;
  }
};

export default modal;
