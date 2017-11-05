import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VINItem from '../VINItem'

class VINList extends Component {
  render() {
    return (
      <div className="row">
        <ul className="vin-list col-sm-12">
          {this._renderVINs(this.props.labels)}
        </ul>
      </div>
    )
  }

  _renderVINs(labels) {
    return labels.map((label, index) => {
      return (<VINItem
        key={`vin-item-${index}`}
        item={label}
        index={index}
        isSelected={this.props.labelIndex === index}
        onSelect={this._selectVINItem}
      />)
    })
  }

  _selectVINItem = labelIndex => {
    console.info('_selectVINItem', labelIndex, this.props.labels[labelIndex])
    this.props.selectLabel(labelIndex, this.props.labels[labelIndex])
  }
}

VINList.PropTypes = {
  sheet: PropTypes.shape({
    labelPositions: PropTypes.arrayOf(PropTypes.string)
  }),
  labels: PropTypes.arrayOf(PropTypes.shape).isRequired,
  labelIndex: PropTypes.number.isRequired,
  selectLabel: PropTypes.func.isRequired
}

export default VINList
