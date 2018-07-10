import React, { Component } from 'react'

import './styles.css'

class Label extends Component {
  render() {
    return (
      <div className="label">
        {this.props.children}
      </div>
    )
  }
}

export default Label
