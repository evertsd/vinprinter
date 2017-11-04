import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VINItem from '../VINItem'

class VINList extends Component {
  componentWillMount() {
    this.state = {
      labels: this.props.labels,
      selectedLabelIndex: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    // if (!this._requiresStateUpdates(nextProps)) return

    this.setState({
      ...this.state,
      labels: nextProps.labels
    })
  }

  render() {
    return (
      <div className="row">
        <ul className="vin-list col-sm-12">
          {this._renderVINs(this.state.labels)}
        </ul>
      </div>
    )
  }

  _renderVINs(labels) {
    let vins = []

    Object.keys(labels).forEach((labelIndex) => {
      vins.push(
        <VINItem
          key={`vin-item-${labelIndex}`}
          item={this.state.labels[labelIndex]}
          index={labelIndex}
          isSelected={this.state.selectedLabelIndex === labelIndex}
          onSelect={(labelIndex) => this._selectVINItem(labelIndex)} />
      )
    })

    return vins
  }

  _selectVINItem(labelIndex) {
    console.info('_selectVINItem', labelIndex, this.state.labels[labelIndex])
    this.setState({
      ...this.state,
      selectedLabelIndex: labelIndex
    })

    this.props.selectLabel(labelIndex, this.state.labels[labelIndex])
  }
}

VINList.PropTypes = {
  labels: PropTypes.shape.isRequired,
  selectLabel: PropTypes.func.isRequired
}

export default VINList
