import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VINSheet from '../VINSheet'

import './styles.css'

class VINSheetPrinter extends Component {
  render() {
    return (
      <div className="print-view">
        {this._renderSheets(this.props.sheets)}
      </div>
    )
  }

  _renderSheets = sheets => (
    sheets.map(sheet => (
      <VINSheet key={`print-sheet-${sheet.id}`} sheet={sheet} labels={this.props.labels} preview={false} />
    ))
  )
}

VINSheetPrinter.PropTypes = {
  sheets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    labelPositions: PropTypes.shape
  })),
  labels: PropTypes.shape
}

export default VINSheetPrinter
