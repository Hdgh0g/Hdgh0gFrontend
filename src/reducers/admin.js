import * as actionTypes from '../actions/login';

const admin = (state = {loggedIn: false, password: null, errorMessage: ''}, action) => {
  switch (action.type) {
    case actionTypes.LOGGING_IN:
    case actionTypes.LOGGED_OUT:
      return {loggedIn: false, password: null, errorMessage: ''};
    case  actionTypes.LOGGED_IN:
      return {loggedIn: true, password: action.payload.password, errorMessage: ''};
    case actionTypes.LOGIN_FAILED:
      const errorMessage = action.error.title || action.error.message;
      return {loggedIn: false, password: null, errorMessage};
    default:
      return state;
  }
};

export default admin;
