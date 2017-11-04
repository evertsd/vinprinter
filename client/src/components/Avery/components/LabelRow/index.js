import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Label from '../Label'

import './styles.css'

class LabelRow extends Component {
  render() {
    let labels = this.props.labels.map((labelItem) => {
      return (
        <Label>
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
}

export default LabelRow
