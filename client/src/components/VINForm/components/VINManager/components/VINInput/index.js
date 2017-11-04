import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const SUBMIT_KEYCODE = 13

class VINInput extends Component {
  componentWillMount() {
    this.state = {
      vin: this.props.item.vin || '',
      index: this.props.index
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.index !== this.state.index) this.vinInput.focus()

    this.setState({
      ...this.state,
      vin: nextProps.item.vin || '',
      index: nextProps.index
    })
  }

  onInputChange(vin) {
    if (vin.length > 8) { return }

    this.props.onInputChange(
      this.state.index, vin.toUpperCase()
    )
  }

  _onKeyPress(event) {
    if (event.keyCode === SUBMIT_KEYCODE) {
      event.stopPropagation()
      this.props.onSubmit(this.state.index, this.state.vin)
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="row vin-list-header">
            <div className="col-sm-12">
              <span>
                VIN, Last 8
              </span>
            </div>
          </div>
          <div className="row bordered-row vehicle-item">
            <div className="col-sm-4 vin-selected-id">
              <span className="selected-vehicle-id">{this.state.index}</span>
            </div>
            <div className="col-sm-8 vin-input-wrapper">
              <input
                type="text"
                placeholder="Last 8 of VIN"
                ref={(input) => { this.vinInput = input }}
                value={this.state.vin}
                onChange={event => this.onInputChange(event.target.value)}
                onKeyDown={(event) => { this._onKeyPress(event)}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

VINInput.PropTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    vin: PropTypes.string
  }),
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default VINInput;
