import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, hashHistory } from 'react-router'

import About from './modules/About'
import Repos from './modules/Repos'

//render a router instead app
//hashHistory manages the routing history with the hash portion of the url
// nest About and Repos components inside of App to share the navigation with all screens in the app - first, let App Route have children, and move other routes beneath it; second, render children inside of App
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
    </Route>
</Router>
), document.getElementById('app'))
