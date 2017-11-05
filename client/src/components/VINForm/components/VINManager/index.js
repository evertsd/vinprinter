import React, { Component } from 'react'
import PropTypes from 'prop-types'
import immutableUpdate from '../../../../lib/array'
import VINInput from './components/VINInput'
import VINList from './components/VINList'
import { find, create } from '../../services/labelReducer'

import './styles.css'

const DEFAULT_LABEL_INDEX = 0

const findOrCreateLabel = (state, labels, labelPositions, index) => {
  return state.labels[index] ||
    find(labels, labelPositions, index) ||
    create()
}

const buildLabelState = (state, sheet, labels) => ([
  findOrCreateLabel(state, labels, sheet.labelPositions, 0),
  findOrCreateLabel(state, labels, sheet.labelPositions, 1),
  findOrCreateLabel(state, labels, sheet.labelPositions, 2),
  findOrCreateLabel(state, labels, sheet.labelPositions, 3),
  findOrCreateLabel(state, labels, sheet.labelPositions, 4),
  findOrCreateLabel(state, labels, sheet.labelPositions, 5),
  findOrCreateLabel(state, labels, sheet.labelPositions, 6),
  findOrCreateLabel(state, labels, sheet.labelPositions, 7),
  findOrCreateLabel(state, labels, sheet.labelPositions, 8),
  findOrCreateLabel(state, labels, sheet.labelPositions, 9),
]);

const buildState = (props, state) => {
  const sheet = props.sheets[props.sheetPositions[props.currentSheet]]
  const labels = buildLabelState(state, sheet, props.labels)
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
    this.state = buildState(this.props, {
      labels: [],
      labelIndex: DEFAULT_LABEL_INDEX
    })
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

  _submitPendingVIN = () => (
    this.props.updateVehicle(
      this.state.sheet.id,
      this.state.labelIndex,
      this.state.label
    )
  )

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
