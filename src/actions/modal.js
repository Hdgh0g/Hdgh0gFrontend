export const CONTACT_CHANGE_VISIBILITY = 'CONTACT_CHANGE_VISIBILITY';
export const TECHNOLOGY_CHANGE_VISIBILITY = 'TECHNOLOGY_CHANGE_VISIBILITY';
export const PROJECT_CHANGE_VISIBILITY = 'PROJECT_CHANGE_VISIBILITY';
export const PHOTO_ADD_CHANGE_VISIBILITY = 'PHOTO_ADD_CHANGE_VISIBILITY';
export const CONTACT_ADD_PROPERTY = 'CONTACT_ADD_PROPERTY';
export const TECHNOLOGY_ADD_PROPERTY = 'TECHNOLOGY_ADD_PROPERTY';
export const PHOTO_ADD_CHANGE_CAPTION = 'PHOTO_ADD_CHANGE_CAPTION';

export const addContactProperty = (property) => {
  return {
    type: CONTACT_ADD_PROPERTY,
    payload: property,
  }
};

export const setContactModalVisible = (value) => {
  return {
    type: CONTACT_CHANGE_VISIBILITY,
    payload: value,
  }
};

export const addTechnologyProperty = (property) => {
  return {
    type: TECHNOLOGY_ADD_PROPERTY,
    payload: property,
  }
};

export const setTechnologyModalVisible = (value) => {
  return {
    type: TECHNOLOGY_CHANGE_VISIBILITY,
    payload: value,
  };
};

export const setProjectModalVisible = (value) => {
  return {
    type: PROJECT_CHANGE_VISIBILITY,
    payload: value,
  };
};

export const setPhotoAddModalVisible = (value) => {
  return {
    type: PHOTO_ADD_CHANGE_VISIBILITY,
    payload: value,
  }
};

export const setPhotoAddModalCaption = (caption) => {
  return {
    type: PHOTO_ADD_CHANGE_CAPTION,
    payload: caption,
  }
};
