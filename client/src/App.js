import React from 'react';
import 'App.css';
import Navbar from 'components/Navbar';
import StockTagForm from 'scenes/StockTagForm';

const App = () => (
    <div id="app">
        <Navbar />
        <StockTagForm />
    </div>
);

export default App;
