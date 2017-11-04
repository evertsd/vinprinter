import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VINDisplay from './components/VINDisplay'

import './styles.css'

class VINLabel extends Component {
  render() {
    let vin = this.props.vehicle ? this.props.vehicle.vin : ''
    let vinLeft = `${vin}-left`
    let vinRight = `${vin}-right`

    return (
      <div className="label-insert">
        <VINDisplay key={vinLeft} vin={vin} side="left" />
        <VINDisplay key={vinRight} vin={vin} side="right" />
      </div>
    )
  }
}

VINLabel.PropTypes = {
  vehicle: PropTypes.shape({
    vin: PropTypes.number.isRequired
  })
}

export default VINLabel
