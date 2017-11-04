import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VINSheet from '../VINSheet'

import './styles.css'

class VINSheetPreview extends Component {
  componentWillMount() {
    this.state = {
      sheet: this.props.sheet
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      sheet: nextProps.sheet,
    })
  }

  render() {
    return (
      <div className="sheet-preview">
        <VINSheet sheet={this.state.sheet} />
      </div>
    )
  }
}

VINSheetPreview.PropTypes = {
  sheet: PropTypes.shape({
    labels: PropTypes.shape
  })
}

export default VINSheetPreview
