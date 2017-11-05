import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import VINLabel from '../VINLabel'
import Sheet from '../../../Avery/components/Sheet'
import { DEFAULT_SHEET_LABLES } from '../../services/const'

const buildLabelState = (sheet, labels) => ([
  labels[sheet.labelPositions[0]] || {},
  labels[sheet.labelPositions[1]] || {},
  labels[sheet.labelPositions[2]] || {},
  labels[sheet.labelPositions[3]] || {},
  labels[sheet.labelPositions[4]] || {},
  labels[sheet.labelPositions[5]] || {},
  labels[sheet.labelPositions[6]] || {},
  labels[sheet.labelPositions[7]] || {},
  labels[sheet.labelPositions[8]] || {},
  labels[sheet.labelPositions[9]] || {},
]);

class VINSheet extends PureComponent {
  componentWillMount() {
    this.state = {
      labels: buildLabelState(this.props.sheet, this.props.labels)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      labels: buildLabelState(nextProps.sheet, nextProps.labels)
    })
  }

  render() {
    let renderedLabels = this._renderLabels(this.state.labels)

    return (
      <Sheet key={`sheet-${this.props.sheet.id}`} labels={renderedLabels} preview={this.props.preview} />
    )
  }

  _renderLabels(labels) {
    return this.state.labels.map((label, labelIndex) => (
      <VINLabel
        key={`vin-label-${label.id}`}
        preview={this.props.preview}
        labelIndex={labelIndex}
        vehicle={label} />
    ))
  }
}

VINSheet.PropTypes = {
  sheet: PropTypes.shape,
  labels: PropTypes.shape,
  preview: PropTypes.boolean
}

export default VINSheet;
