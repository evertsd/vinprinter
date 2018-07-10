import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css'
import AppContainer from './containers/AppContainer.js'
import Navbar from './components/Navbar'
import { render } from 'react-dom'
import store from './store'

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

/*
render(
  <Provider store={store}>
    <Navbar />
  </Provider>,
  document.getElementById('navbar')
);
*/
