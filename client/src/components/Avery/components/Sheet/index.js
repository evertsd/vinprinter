import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LabelRow from '../LabelRow'

import './styles.css'

class Sheet extends Component {
  componentWillMount() {
    this.state = {
      labels: this.props.labels
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      labels: nextProps.labels
    })
  }

  render() {
    let labelIds = Object.keys(this.state.labels)
    let labelState = { labelQueue: [], renderedLabels: [] }
    let wrapperClassName = `sheet${!!this.props.preview ? ' sheet-preview' : ''}`

    labelIds.forEach((labelId) => {
      labelState = this._addLabel(
        this.state.labels[labelId], labelState
      )
    })

    if (labelState.labelQueue.length) {
      labelState = this._addLabel(undefined, labelState)
    }

    return (
      <div className={wrapperClassName}>{labelState.renderedLabels}</div>
    )
  }

  _addLabel(label, labelState) {
    if (labelState.labelQueue.length > 0) {
      return {
        ...labelState,
        labelQueue: [],
        renderedLabels: [
          ...labelState.renderedLabels,
          this._renderLabelRow(label, labelState)
        ]
      }
    }

    return {
      ...labelState,
      labelQueue: [
        ...labelState.labelQueue,
        label
      ]
    }
  }

  _renderLabelRow(label, labelState) {
    let labels = label ? [
      ...labelState.labelQueue,
      label
    ] : labelState.labelQueue

    return (
      <LabelRow
        key={labelState.renderedLabels.length}
        labels={labels} />
    )
  }


}

Sheet.PropTypes = {
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.number
    })
  ),
  preview: PropTypes.boolean
}

export default Sheet;
