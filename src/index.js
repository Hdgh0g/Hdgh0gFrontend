import React from 'react';
import ReactDOM from 'react-dom';
import Hdgh0gSite from './components/Hdgh0gSite/Hdgh0gSite.jsx';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import PhotoPage from './components/PhotoPage/PhotoPage.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';
import { Router, Route } from 'react-router';
import { browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import store  from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Route path='/' component={Hdgh0gSite}>
      <Route path='/about' component={AboutPage} />
      <Route path='/photo' component={PhotoPage}/>
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
