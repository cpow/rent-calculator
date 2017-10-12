import React from 'react';
import ZipCodeForm from './components/ZipCodeForm';
import './App.css';

const { Component } = React;

class App extends Component {
  render() {
    return(
      <div className="App">Hello World!
        <ZipCodeForm/>
      </div>
    );
  }
}

export default App;
