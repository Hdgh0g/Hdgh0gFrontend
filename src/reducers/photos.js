import * as actionTypes from '../actions/photos'

const photos = (state = {
  photosList: [],
  photosError: null,
  pageInfo: null
}, action) => {
  switch (action.type) {
    case actionTypes.PHOTOS_LOADING:
      return {
        photosList: [],
        photosError: null,
        pageInfo: null
      };
    case  actionTypes.PHOTOS_LOADED:
      return {
        photosList: action.payload.content,
        photosError: null,
        pageInfo: action.payload.pageInfo,
      };
    case actionTypes.PHOTOS_LOAD_FAILURE:
      return {
        photosList: [],
        photosError: action.error,
        pageInfo: null,
      };
    default:
      return state;
  }
};

export default photos;
