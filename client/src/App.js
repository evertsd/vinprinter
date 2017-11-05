import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'
import logo from './logo.svg'
import VINManagerContainer from './containers/VINManagerContainer'
import VINSheetPreviewContainer from './containers/VINSheetPreviewContainer'
import VINSheetPrintContainer from './containers/VINSheetPrintContainer'
import VINFormHeaderContainer from './components/VINForm/containers/VINFormHeaderContainer'
import { submitForm } from './components/VINForm/services/actions'
import './App.css'

class App extends Component {
  componentWillMount() {
    console.info('App.props', this.props)
    if (!Object.keys(this.props.sheets).length) {
      this.props.addSheet(0, uuidv4())
    }
  }

  render() {
    return (
      <div id="app">
        <section>
          <div className="container">
            <VINFormHeaderContainer />
            <div className="row no-print">
              <div className="col-sm-3">
                <VINManagerContainer />
              </div>
              <div className="col-sm-9">
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
