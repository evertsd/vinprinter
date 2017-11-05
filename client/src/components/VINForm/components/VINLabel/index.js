import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VINDisplay from './components/VINDisplay'

import './styles.css'

const LEFT = 'left'
const RIGHT = 'right'

class VINLabel extends Component {
  componentWillMount() {
    this.state = {
      id: this.props.vehicle.id,
      vin: this.props.vehicle.vin
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: this.props.vehicle.id,
      vin: nextProps.vehicle.vin
    })
  }

  getDisplayKey = (side) => (
    `vin-display-${side}-${this.state.id}`
  )

  render() {
    return (
      <div className="label-insert">
        <VINDisplay key={this.getDisplayKey(LEFT)} id={this.state.id} vin={this.state.vin} side={LEFT} />
        <VINDisplay key={this.getDisplayKey(RIGHT)} id={this.state.id} vin={this.state.vin} side={RIGHT} />
      </div>
    )
  }
}

VINLabel.PropTypes = {
  vehicle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    vin: PropTypes.number.isRequired
  }),
  preview: PropTypes.boolean,
  labelIndex: PropTypes.number
}

export default VINLabel
