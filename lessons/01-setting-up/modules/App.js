import React from 'react'

export default React.createClass({
  render(){
    <div>
      <h1>React Router Tutorial</h1>
      <ul role="nav">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/repos">Repos</Link></li>
      </ul>
    </div>
  }
})
