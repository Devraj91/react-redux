import React, { Component } from 'react';
import './App.css';
import Posts from './component/Posts';
import Postform from './component/Postform';
import Header from './component/header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Postform />
        <Posts />
      </div>
    );
  }
}

export default App;
