import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'

// render a router instead app
// hashHistory manages the routing history with the hash portion of the url
// nest About and Repos components inside of App to share the navigation with all screens in the app - first, let App Route have children, and move other routes beneath it; second, render children inside of App
// the : denotes a URL parameter whose value will be parsed out and made available to route components on this.props.params[name]
// notice that IndexRoute has no path; it becomes this.props.children of the parent when no other child of the parent matches (i.e. when the parent's route matches exactly)
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
</Router>
), document.getElementById('app'))
