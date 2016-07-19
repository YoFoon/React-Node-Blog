import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import BlogList from './list/index';
import Detail from "./detail/index";

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={BlogList}/>
    <Route path="/detail/:title" component={Detail}/>
  </Router>
), document.getElementById('app'));

//ReactDOM.render(<Router  routes={Rou} history={hashHistory} />,document.getElementById('app'));
