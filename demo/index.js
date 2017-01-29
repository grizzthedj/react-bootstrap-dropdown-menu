import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import App from './App';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'))
