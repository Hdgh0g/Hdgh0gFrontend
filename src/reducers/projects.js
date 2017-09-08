import * as actionTypes from '../actions/projects'

const projects = (state = {projectsList: [], projectsError: null}, action) => {
  switch (action.type) {
    case actionTypes.PROJECTS_LOADING:
      return {projectsList : [], projectsError : null};
    case  actionTypes.PROJECTS_LOADED:
      return {projectsList : action.payload, projectsError : null};
    case actionTypes.PROJECTS_LOAD_FAILURE:
      return {projectsList : [], projectsError: action.error};
    default:
      return state;
  }
};

export default projects;
