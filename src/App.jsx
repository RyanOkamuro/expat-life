import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import CustomNavBar from './components/CustomNavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavBar />
        </div>
      </Router>
    );
  }
}

export default App;
