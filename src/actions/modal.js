export const CONTACT_CHANGE_VISIBILITY = 'CONTACT_CHANGE_VISIBILITY';
export const CONTACT_ADD_PROPERTY = 'CONTACT_ADD_PROPERTY';

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

export const setTechnologyModalVisible = (value) => {
  console.log("changing visibility of technology modal set " + value)
};

export const setProjectModalVisible = (value) => {
  console.log("changing visibility of project modal set " + value)
};
