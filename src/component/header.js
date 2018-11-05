import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const header = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />          
            </header>
        </div>
    )
}

export default header;