import React, { Component } from 'react'
import PropTypes from 'prop-types'
import immutableUpdate from '../../../../lib/array'
import VINInput from './components/VINInput'
import VINList from './components/VINList'

import './styles.css'

const DEFAULT_LABEL_INDEX = 0
const LABELS_PER_SHEET = 10

const create = () => ({
})

const findOrCreateLabel = (labels, labelMap, index) => {
  return labels[labelMap[index]] || create()
}

const buildLabelState = (labels, labelMap) => ([
  findOrCreateLabel(labels, labelMap, 1),
  findOrCreateLabel(labels, labelMap, 2),
  findOrCreateLabel(labels, labelMap, 3),
  findOrCreateLabel(labels, labelMap, 4),
  findOrCreateLabel(labels, labelMap, 5),
  findOrCreateLabel(labels, labelMap, 6),
  findOrCreateLabel(labels, labelMap, 7),
  findOrCreateLabel(labels, labelMap, 8),
  findOrCreateLabel(labels, labelMap, 9),
  findOrCreateLabel(labels, labelMap, 10),
]);

const initialState = {
  labels: [],
  labelIndex: DEFAULT_LABEL_INDEX,
  labelErrors: {}
}

const buildState = (props, state) => {
  const sheet = props.sheets[props.currentSheet]
  const labelMap = sheet && sheet.labels
  const labels = buildLabelState(props.labels, labelMap || {})
  const labelIndex = state.labelIndex || DEFAULT_LABEL_INDEX

  return {
    sheet,
    sheetIndex: props.currentSheet,
    labels,
    label: labels[labelIndex],
    labelIndex,
    sheetCount: props.sheets.length
  }
}

class VINManager extends Component {
  componentWillMount() {
    this.state = buildState(this.props, initialState)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      ...buildState(nextProps, this.state)
    })
  }

  render() {
    return (
      <div className="vin-manager">
        <VINInput
          key="vin-input"
          item={this.state.label}
          index={this.state.labelIndex}
          onInputChange={this._updatePendingVIN}
          onSubmit={this._submitPendingVIN}
        />
        <section>
          <div className="row vin-list-header">
            <div className="col-sm-12">
              <span>
                Current Sheet
                <span className="pull-right">
                  ({this.state.sheetIndex + 1} / {this.state.sheetCount})
                </span>
              </span>
            </div>
          </div>
          <VINList
            sheet={this.state.sheet}
            labels={this.state.labels}
            labelIndex={this.state.labelIndex}
            selectLabel={this.selectLabel} />
        </section>
      </div>
    )
  }

  selectLabel = (labelIndex, selection) => {
    this.setState({
      ...this.state,
      label: selection,
      labelIndex,
    })
  }

  _updatePendingVIN = (index, vin) => {
    this.setState({
      ...this.state,
      label: {
        ...this.state.label,
        vin: vin
      },
      labels: immutableUpdate(this.state.labels, index, {
        vin: vin
      })
    });
  }

  _submitPendingVIN = () => {
    const {
      sheet, label, labelIndex
    } = this.state

    const newLabelIndex = (labelIndex + 1) > LABELS_PER_SHEET ? DEFAULT_LABEL_INDEX : labelIndex + 1;
    this.setState({
      ...this.state,
      labelIndex: newLabelIndex,
      label: this.state.labels[newLabelIndex]
    }, () => (
      this.props.updateVehicle(sheet.id, labelIndex + 1, {
        type: 'VINLabel',
        ...label
      })
    ));
  }

  _requiresStateUpdates(nextProps) {
    /*let labels = nextProps.vehiclesForm.sheets
    let selected = this.state.selectedVehicle
    let selectedUpdates = .[this.state.selected]

    return selected && selectedUpdates &&
      (selected.vin !== selectedUpdates.vin)*/
    return true
  }
}

VINManager.PropTypes = {
  vehiclesForm: PropTypes.shape({
    currentSheetIndex: PropTypes.number,
    sheets: PropTypes.arrayOf(PropTypes.shape({
      labels: PropTypes.shape
    }))
  }),
  updateVehicle: PropTypes.func.isRequired
}

export default VINManager;
