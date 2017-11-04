import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VINLabel from '../VINLabel'
import VINSheet from '../VINSheet'

import './styles.css'

const VEHICLES_PER_SHEET = 10

class VINSheetPrinter extends Component {
  componentWillMount() {
    this.state = {
      sheets: this.props.sheets
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      sheets: nextProps.sheets,
    })
  }

  render() {
    return (
      <div className="print-view">
        {this._renderSheets(this.state.sheets)}
      </div>
    )
  }

  _renderSheets(sheets) {
    return sheets.map((sheet) => {
      return <VINSheet sheet={sheet} preview={false} />
    })
  }
}

VINSheetPrinter.PropTypes = {
  sheets: PropTypes.arrayOf(PropTypes.shape({
    labels: PropTypes.shape
  }))
}

export default VINSheetPrinter
