import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VINSheet from '../VINSheet'

import './styles.css'

class VINSheetPreview extends Component {
  render() {
    return (
      <div className="sheet-preview">
        <VINSheet sheet={this.props.sheet} labels={this.props.labels} />
      </div>
    )
  }
}

VINSheetPreview.PropTypes = {
  sheet: PropTypes.shape({
    labelPositions: PropTypes.shape
  }),
  labels: PropTypes.shape
}

export default VINSheetPreview
