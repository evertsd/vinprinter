import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App'
import Navbar from './components/Navbar'
import { render } from 'react-dom'
import store from './store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


render(
  <Provider store={store}>
    <Navbar />
  </Provider>,
  document.getElementById('navbar')
);
