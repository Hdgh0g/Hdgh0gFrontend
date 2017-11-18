import * as actionTypes from '../actions/technologies'

const technologies = (state = {
  technologiesList: [],
  technologiesError: null,
  removeError: null,
  uploadError: null
}, action) => {
  switch (action.type) {
    case actionTypes.TECHNOLOGIES_LOADING:
      return {
        ...state,
        technologiesList : [],
        technologiesError : null
      };
    case  actionTypes.TECHNOLOGIES_LOADED:
      return {
        ...state,
        technologiesList : action.payload,
        technologiesError : null
      };
    case actionTypes.TECHNOLOGIES_LOAD_FAILURE:
      return {
        ...state,
        technologiesList : [],
        technologiesError: action.error
      };
    case actionTypes.TECHNOLOGY_UPLOAD_FAILURE:
      return {
        ...state,
        uploadError: action.error.title || action.error.message,
      };
    case actionTypes.TECHNOLOGY_UPLOADED:
      return {
        ...state,
        technologiesList: action.payload,
        technologiesError: null,
        uploadError: null
      };
    case actionTypes.TECHNOLOGY_UPLOADING:
      return {
        ...state,
        uploadError: null
      };
    case actionTypes.TECHNOLOGY_REMOVING:
      return {
        ...state,
        removeError: null
      };
    case actionTypes.TECHNOLOGY_REMOVE_FAILURE:
      return {
        ...state,
        removeError: action.error.title || action.error.message,
      };
    case actionTypes.TECHNOLOGY_REMOVED:
      return {
        ...state,
        technologiesList: action.payload,
        technologiesError: null,
        removeError: null
      };

    default:
      return state;
  }
};

export default technologies;
