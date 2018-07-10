import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StockTagLabel } from 'Labels';
import BlankLabel from 'Avery/components/BlankLabel';
import VINLabel from '../VINLabel';
import SheetContainer from 'Avery/containers/SheetContainer.js';

const labelTypeToComponent = labelType => {
    switch (labelType) {
        case 'StockTagLabel':
            return StockTagLabel;
        case 'VINLabel':
            return VINLabel;
        default:
            return BlankLabel;
    }
};

class VINSheet extends PureComponent {
  render() {
    return (
      <SheetContainer
        key={`sheet-${this.props.sheetId}`}
        sheetId={this.props.sheetId}
        labelTypeToComponent={labelTypeToComponent}
        preview={this.props.preview} />
    )
  }
}

VINSheet.PropTypes = {
  sheetId: PropTypes.shape,
  preview: PropTypes.boolean
}

export default VINSheet;
