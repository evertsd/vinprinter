import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VINInput from './components/VINInput'
import VINList from './components/VINList'

import './styles.css'

const DEFAULT_LABEL_INDEX = 0

class VINManager extends Component {
  componentWillMount() {
    console.info('componentWillMount', this.props)
    this.state = this._buildState(this.props.vehiclesForm, {})
  }

  componentWillReceiveProps(nextProps) {
    // if (!this._requiresStateUpdates(nextProps)) return
    console.info('componentWillReceiveProps nextProps', nextProps)
    this.setState(this._buildState(
      nextProps.vehiclesForm, this.state
    ))
  }

  _buildState(vehiclesForm, oldState) {
    let sheet = vehiclesForm.sheets[vehiclesForm.currentSheetIndex]
    let selectedLabelIndex = oldState.selectedLabelIndex || DEFAULT_LABEL_INDEX

    return {
      ...oldState,
      sheet,
      selectedLabelIndex,
      selectedSheetIndex: vehiclesForm.currentSheetIndex,
      selectedVehicle: sheet.labels[selectedLabelIndex],
      numberOfSheets: vehiclesForm.sheets.length
    }
  }

  selectLabel(labelIndex, selection) {
    console.info('selectLabel', labelIndex, selection)
    this.setState({
      ...this.state,
      selectedLabelIndex: labelIndex,
      selectedVehicle: selection
    })
  }

  render() {
    return (
      <div className="vin-manager">
        <VINInput
          key="vin-input"
          item={this.state.selectedVehicle}
          index={this.state.selectedLabelIndex}
          onInputChange={(index, vin) => {
            this._updatePendingVIN(index, vin)
          }}
          onSubmit={(index, vin) => {
            this._submitPendingVIN(index, vin)
          }}
        />
        <section>
          <div className="row vin-list-header">
            <div className="col-sm-12">
              <span>
                Current Sheet
                <span className="pull-right">
                  ({this.state.selectedSheetIndex + 1} / {this.state.numberOfSheets})
                </span>
              </span>
            </div>
          </div>
          <VINList labels={this.state.sheet.labels} selectLabel={(index, selection) => { this.selectLabel(index, selection) }} />
        </section>
      </div>
    )
  }

  _updatePendingVIN(index, vin) {
    let selected = {
      ...this.state.selectedVehicle,
      vin: vin
    }

    this.setState({
      ...this.state,
      selectedVehicle: selected,
      sheet: {
        ...this.state.sheet,
        labels: {
          ...this.state.sheet.labels,
          [index]: selected
        }
      }
    })
  }

  _submitPendingVIN(labelIndex, vin) {
    this.props.updateVehicle(
      this.state.selectedSheetIndex,
      labelIndex,
      vin
    )
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
