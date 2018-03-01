import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
    }
}

export default App;
