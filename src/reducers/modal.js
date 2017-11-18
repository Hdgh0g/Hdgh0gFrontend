import * as actionTypes from '../actions/modal'
import {CONTACT_UPLOADED} from '../actions/contacts'
import {TECHNOLOGY_UPLOADED} from '../actions/technologies'
import {IMAGE_WITH_CAPTION_UPLOADED} from "../actions/image";

const modal = (state = {
  contact: {active: false, object: null},
  technology: {active: false, object: null},
  project: {active: false, object: null},
  photoAdd: {active: false, caption: null},
  photoBig: {active: false, selectedPhotoId: null}
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
    case actionTypes.PROJECT_CHANGE_VISIBILITY :
      return {
        ...state,
        project: {
          active: action.payload,
          object: null,
        }
      };
    case actionTypes.TECHNOLOGY_CHANGE_VISIBILITY :
      return {
        ...state,
        technology: {
          active: action.payload,
          object: null,
        }
      };
    case actionTypes.TECHNOLOGY_ADD_PROPERTY :
      return {
        ...state,
        technology: {
          active: true,
          object: {
            ...state.technology.object,
            ...action.payload
          }
        }
      };
    case TECHNOLOGY_UPLOADED :
      return {
        ...state,
        technology: {
          active: false,
          object: null
        }
      };
    case actionTypes.PHOTO_ADD_CHANGE_VISIBILITY :
      return {
        ...state,
        photoAdd: {
          active: action.payload,
          caption: null,
        }
      };
    case actionTypes.PHOTO_ADD_CHANGE_CAPTION :
      return {
        ...state,
        photoAdd: {
          active: true,
          caption: action.payload
        }
      };
    case IMAGE_WITH_CAPTION_UPLOADED :
      return {
        ...state,
        photoAdd: {
          active: false,
          caption: null,
        }
      };
    case actionTypes.PHOTO_BIG_CHANGE_VISIBILITY :
      return {
        ...state,
        photoBig: {
          active: action.payload.visible,
          selectedPhotoId: action.payload.id,
        }
      };
    default:
      return state;
  }
};

export default modal;
