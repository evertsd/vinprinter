import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LabelRow from '../LabelRow'
import Label from '../Label'
import BlankLabel from '../BlankLabel'
import './styles.css'

const labelRows = [
  0, 1, 2, 3, 4
]
export const labelLocations = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

const findLabel = (labelLocation, labelMap, labels) => (
  labels[labelMap[labelLocation]]
)

const getLabelComponent = (labelTypeToComponent, labelType) => {
  let labelComponent = labelTypeToComponent(labelType)

  if (!labelComponent) {
    labelComponent = BlankLabel
  }

  return labelComponent
}

const renderLabel = (labelLocation, props) => {
  const labelMap = props.sheet && props.sheet.labels
  const label = findLabel(labelLocation, labelMap || {}, props.labels)

  const LabelComponent = getLabelComponent(props.labelTypeToComponent, label && label.type)

  return (
    <Label>
      <LabelComponent {...label} />
    </Label>
  )
}

class Sheet extends Component {
  componentWillMount() {
    this.state = {
      labels: labelLocations.map(labelLocation => (
        renderLabel(labelLocation, this.props)
      ))
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      labels: labelLocations.map(labelLocation => (
        renderLabel(labelLocation, nextProps)
      ))
    })
  }

  render() {
    let wrapperClassName = `sheet${!!this.props.preview ? ' sheet-preview' : ''}`

    return (
      <div className={wrapperClassName}>{this.renderLabelRows()}</div>
    )
  }

  renderLabelRows = () => (
    labelRows.map(rowNumber => (
      <LabelRow key={`avery-row-${rowNumber}`}>
        {this.state.labels[rowNumber*2 + 0]}
        {this.state.labels[rowNumber*2 + 1]}
      </LabelRow>
    ))
  )
}

Sheet.PropTypes = {
  sheet: PropTypes.shape({
    labels: PropTypes.shape({})
  }),
  labels: PropTypes.shape({})
}

export default Sheet;
