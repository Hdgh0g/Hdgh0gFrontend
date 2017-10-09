import * as actionTypes from '../actions/image'

const image = (state = {image: null, error: null}, action) => {
  switch (action.type) {
    case actionTypes.IMAGE_UPLOADING:
    case actionTypes.IMAGE_CLEAR:
      return {image: null, error: null};
    case  actionTypes.IMAGE_UPLOADED:
      return {image : action.payload, error : null};
    case actionTypes.IMAGE_UPLOAD_FAILURE:
      const errorMessage = action.error.title || action.error.message;
      return {image : null, error: errorMessage};
    default:
      return state;
  }
};

export default image;

