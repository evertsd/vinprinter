import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store';

const { store, persistor } = createStore();

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App persistor={persistor} />
        </PersistGate>
    </Provider>,
    document.getElementById('root') // eslint-disable-line no-undef
);

registerServiceWorker();
