import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import technologies from './technologies'
import contacts from './contacts'
import projects from './projects'
import photos from './photos'
import admin from './admin'
import image from './image'
import modal from './modal'

const rootReducer = combineReducers({
  routing: routerReducer,
  technologies,
  contacts,
  projects,
  photos,
  admin,
  image,
  modal
});

export default rootReducer;
