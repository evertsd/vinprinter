import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'
import Navbar from './components/Navbar'
import StockTagManagerContainer from './components/StockTagForm'
import VINSheetPreviewContainer from './containers/VINSheetPreviewContainer'
import VINSheetPrintContainer from './containers/VINSheetPrintContainer'
import VINFormHeaderContainer from './components/VINForm/containers/VINFormHeaderContainer'

import './App.css'

class App extends Component {
  componentWillMount() {
    if (!Object.keys(this.props.sheets).length) {
      this.props.addSheet(0, uuidv4())
    }
  }

  render() {
    return (
      <div id="app">
          <Navbar />
        <section>
          <div className="container">
            <VINFormHeaderContainer />
            <div className="row no-print">
              <div className="col-sm-3 col-md-5">
                <StockTagManagerContainer />
              </div>
              <div className="col-sm-9 col-md-7">
                <VINSheetPreviewContainer />
              </div>
            </div>
          </div>
          <div className="print">
            <VINSheetPrintContainer />
          </div>
        </section>
      </div>
    )
  }
}

App.PropTypes = {
  sheets: PropTypes.shape.isRequired,
  addSheet: PropTypes.func.isRequired
}

export default App
