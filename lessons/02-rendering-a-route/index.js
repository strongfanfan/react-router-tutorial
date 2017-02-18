import React from 'react'
import {render} from 'react-dom'
import { Router, Route, hashHistory,Link} from 'react-router'
import About from './modules/About'
import App from './modules/App'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>    
  </Router>
), document.getElementById('app'))
