import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SampleForm from './components/SampleForm/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SampleForm />
        </header>
      </div>
    );
  }
}

export default App;
