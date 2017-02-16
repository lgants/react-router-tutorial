import React from 'react'
import { Link } from 'react-router'

// hoc to apply nav link style
// use a spread operator to clone props; also, clone activeClassName to the desired component
// could also use activeStyle={{ color: 'green' }}
export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})
