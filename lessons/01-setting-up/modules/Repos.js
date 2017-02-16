import React from 'react'
import NavLink from './NavLink'

// {this.props.children} will render `Repo.js` when at /repos/:userName/:repoName when nested in index.js
export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
