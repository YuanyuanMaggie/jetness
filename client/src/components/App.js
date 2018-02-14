import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="content">Hello, Jetness</div>
        <Footer/>
      </div>
    );
  }
}

export default App;
