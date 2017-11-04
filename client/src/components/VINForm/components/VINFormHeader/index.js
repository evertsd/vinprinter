import React, { Component } from 'react'
import PropTypes from 'prop-types'

class VINFormHeader extends Component {
  printSheets() {
    this.props.submitForm(this.props.form)
  }

  render() {
    return (
      <div className="row no-print page-header">
        <div className="col-sm-9">
          <h2>Enter VINs</h2>
        </div>
        <div className="col-sm-3">
          <button className="btn btn-primary" onClick={event => this.printSheets()}>
            Print
          </button>
        </div>
      </div>
    )
  }
}

VINFormHeader.PropTypes = {
  form: PropTypes.shape.isRequired,
  submitForm: PropTypes.func.isRequired
}

export default VINFormHeader
