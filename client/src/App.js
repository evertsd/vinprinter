import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import 'App.css';
import Navbar from 'components/Navbar';
import ResetRedux from 'components/ResetRedux';
import StockTagForm from 'scenes/StockTagForm';

const StockTagComponent = () => (
    <div id="app">
        <Navbar />
        <StockTagForm />
    </div>
);

const App = ({ persistor }) => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={StockTagComponent} />
            <Route path="/reset" render={props => <ResetRedux {...props} persistor={persistor} />} />

            <Route render={() => <Redirect to="/" />} />
        </Switch>
    </BrowserRouter>
);

export default App;
