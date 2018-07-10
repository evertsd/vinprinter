import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FormHeader extends Component {
  render() {
    return (
      <div className="row no-print page-header">
        <div className="col-sm-9">
          <h2>{this.props.title}</h2>
        </div>
        <div className="col-sm-3">
          <button className="btn btn-primary" onClick={this.props.onPrint}>
            Print
          </button>
        </div>
      </div>
    )
  }
}

FormHeader.PropTypes = {
  title: PropTypes.string.isRequired,
  onPrint: PropTypes.func.isRequired
}

export default FormHeader
