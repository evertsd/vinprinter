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
    sheets.map(sheetId => (
      <VINSheet key={`print-sheet-${sheetId}`} sheetId={sheetId} preview={false} />
    ))
  )
}

VINSheetPrinter.PropTypes = {
  sheets: PropTypes.arrayOf(PropTypes.string)
}

export default VINSheetPrinter
