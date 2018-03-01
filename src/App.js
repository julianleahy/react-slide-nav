import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import GitLink from './GitLink/GitLink';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <GitLink />
                <Navbar />
            </div>
            </BrowserRouter>
        );
    }
}

export default App;
