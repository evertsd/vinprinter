import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Label from '../Label'

import './styles.css'

class LabelRow extends Component {
  render() {
    let labels = this.props.labels.map((labelItem, labelIndex) => {
      return (
        <Label key={`avery-label-${this.props.rowNumber}-${labelIndex}`}>
          {labelItem}
        </Label>
      )
    })

    return (
      <div className="label-row">
        {labels}
      </div>
    )
  }
}

LabelRow.PropTypes = {
  labels: PropTypes.arrayOf(PropTypes.shape({
    vin: PropTypes.number
  })),
  rowNumber: PropTypes.number,
}

export default LabelRow
