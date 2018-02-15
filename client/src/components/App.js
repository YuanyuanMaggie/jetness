import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from './Footer';
import Header from './Header';
import Dashboard from './Dashboard';
import Recommendation from './Recommendation';
import Result from './Result';
import * as actions from '../actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Header/>
              <Route exact path="/" component={Dashboard}/>
              <Route exact path="/recommendations" component={Recommendation}/>
              <Route exact path="/result" component={Result}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
