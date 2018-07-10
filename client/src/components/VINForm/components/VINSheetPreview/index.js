import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VINSheet from '../VINSheet'

import './styles.css'

class VINSheetPreview extends Component {
  render() {
    return (
      <div className="sheet-preview">
        <VINSheet sheetId={this.props.sheetId} preview={true} />
      </div>
    )
  }
}

VINSheetPreview.PropTypes = {
  sheetId: PropTypes.string
}

export default VINSheetPreview
