import api from '../api'
import * as actionTypes from '../actions/actionTypes'

export const IMAGE_UPLOADING = 'IMAGE_UPLOADING';
export const IMAGE_UPLOADED = 'IMAGE_UPLOADED';
export const IMAGE_UPLOAD_FAILURE = 'IMAGE_UPLOAD_FAILURE';
export const IMAGE_CLEAR = 'IMAGE_CLEAR';

export const uploadImage = (image) => {
  return {
    type: actionTypes.AUTHORIZED_PROMISE,
    actions: [IMAGE_UPLOADING, IMAGE_UPLOADED, IMAGE_UPLOAD_FAILURE],
    payload: (credentials) => api.postImage(credentials, image),
  };
};

export const clearImage = () => ({type : IMAGE_CLEAR});
