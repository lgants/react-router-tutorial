import React from 'react'

// {this.props.params.repoName} becomes accessible with :repoName route inside index.js
export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
})
