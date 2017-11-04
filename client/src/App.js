import React, { Component } from 'react'
import logo from './logo.svg'
import VINManagerContainer from './containers/VINManagerContainer'
import VINSheetPreviewContainer from './containers/VINSheetPreviewContainer'
import VINSheetPrintContainer from './containers/VINSheetPrintContainer'
import VINFormHeaderContainer from './components/VINForm/containers/VINFormHeaderContainer'
import { submitForm } from './components/VINForm/services/actions'
import './App.css'

class App extends Component {
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

export default App
