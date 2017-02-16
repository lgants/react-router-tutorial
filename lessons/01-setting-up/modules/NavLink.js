import React from 'react'
import { Link } from 'react-router'

// hoc to apply nav link style
// use a spread operator to clone props; also, clone activeClassName to the desired component
// could also use activeStyle={{ color: 'green' }}
// parent routes are active when child routes are active and / is everythings parent (e.g. adding <NavLink to="/">Home</NavLink> to app.js will result in "Home" being constantly active)
// remedies: 1) use IndexLink instead of NavLink 2) use Link by passing it the onlyActiveOnIndex={true} prop (IndexLink wraps Link with this property for convenience)
export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})
