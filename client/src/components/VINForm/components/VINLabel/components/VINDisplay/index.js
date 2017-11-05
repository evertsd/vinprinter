import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class VINDisplay extends Component {
  render() {
    let vin = this.props.vin
    let classes = `rotate vin vin-${this.props.side}`

    return (
      <div className={classes}>
        {this._renderVin(vin)}
      </div>
    )
  }

  _getSpanKey = index => (
    `vin-display-span-${this.props.id}-${this.props.side}-${index}`
  )

  _renderVin(vin) {
    if (!vin) return Array(9).fill('')

    let i = 0, letters = []

    while (i < vin.length) {
      letters.push(<span key={this._getSpanKey(i)}>{vin[i++]}</span>)
    }

    return letters
  }
}

VINDisplay.PropTypes = {
  id: PropTypes.string.isRequired,
  vin: PropTypes.number.isRequired,
  side: PropTypes.string.isRequired
}

export default VINDisplay
