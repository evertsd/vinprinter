import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class VINItem extends Component {
  componentWillMount() {
    this.state = {
      item: {
        ...this.props.item
      },
      index: this.props.index,
      isSelected: this.props.isSelected
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      item: nextProps.item,
      index: nextProps.index,
      isSelected: nextProps.isSelected
    })
  }

  _selectItem() {
    this.props.onSelect(this.state.index)
  }

  render() {
    let className = `row bordered-row vehicle-item${this.state.isSelected ? ' selected' : ''}`

    return (
      <li className={className}>
        <div className="col-sm-4">
          <span>{this.state.index}</span>
        </div>
        <div className="col-sm-8 vehicle-item-vin">
          <a className="clickable" onClick={event => this._selectItem()}>
            {this.state.item.vin}
          </a>
        </div>
      </li>
    )
  }
}

VINItem.PropTypes = {
  item: PropTypes.shape({
    vin: PropTypes.string
  }),
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired
}

export default VINItem;
