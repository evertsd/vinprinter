import React, { Component } from 'react'

import './styles.css'

class LabelRow extends Component {
  render() {
    return (
      <div className="label-row">
        {this.props.children}
      </div>
    )
  }
}

export default LabelRow
