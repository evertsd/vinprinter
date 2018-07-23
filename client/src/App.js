import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import 'App.css';
import Navbar from 'components/Navbar';
import ResetRedux from 'components/ResetRedux';
import StockTagForm from 'scenes/StockTagForm';

const BASE_ROUTE = '/vinprinter';

const StockTagComponent = () => (
    <div id="app">
        <Navbar />
        <StockTagForm />
    </div>
);

const App = ({ persistor }) => (
    <BrowserRouter>
        <Switch>
            <Route path={BASE_ROUTE} exact={true} component={StockTagComponent} />
            <Route path={`${BASE_ROUTE}/reset`} render={props => <ResetRedux {...props} persistor={persistor} />} />

            <Route render={() => <Redirect to={BASE_ROUTE} />} />
        </Switch>
    </BrowserRouter>
);

export default App;
