import * as actionTypes from '../actions/technologies'

const technologies = (state = {technologiesList: [], technologiesError: null}, action) => {
  switch (action.type) {
    case actionTypes.TECHNOLOGIES_LOADING:
      return {technologiesList : [], technologiesError : null}
    case  actionTypes.TECHNOLOGIES_LOADED:
      return {technologiesList : action.payload, technologiesError : null};
    case actionTypes.TECHNOLOGIES_LOAD_FAILURE:
      return {technologiesList : [], technologiesError: action.error};
    default:
      return state;
  }
};

export default technologies;
