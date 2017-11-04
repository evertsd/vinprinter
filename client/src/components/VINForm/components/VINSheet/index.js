import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VINLabel from '../VINLabel'
import Sheet from '../../../Avery/components/Sheet'

class VINSheet extends Component {
  componentWillMount() {
    this.state = {
      sheet: this.props.sheet
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      sheet: nextProps.sheet,
    })
  }

  render() {
    let labels = this._renderLabels(this.state.sheet.labels)

    return (
      <Sheet labels={labels} preview={this.props.preview} />
    )
  }

  _renderLabels(labels) {
    return [
      <VINLabel vehicle={labels[0]} />,
      <VINLabel vehicle={labels[1]} />,
      <VINLabel vehicle={labels[2]} />,
      <VINLabel vehicle={labels[3]} />,
      <VINLabel vehicle={labels[4]} />,
      <VINLabel vehicle={labels[5]} />,
      <VINLabel vehicle={labels[6]} />,
      <VINLabel vehicle={labels[7]} />,
      <VINLabel vehicle={labels[8]} />,
      <VINLabel vehicle={labels[9]} />
    ]
  }
}

VINSheet.PropTypes = {
  sheet: PropTypes.shape({
    labels: PropTypes.shape
  }),
  preview: PropTypes.boolean
}

export default VINSheet;
