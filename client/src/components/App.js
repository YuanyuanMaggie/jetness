import React, { Component } from 'react';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="content">Body</div>
        <Footer/>
      </div>
    );
  }
}

export default App;
