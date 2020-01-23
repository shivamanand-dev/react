import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am Shivam</h1>
        <p>Friend of Kavya!</p>

        <button>Switch name</button>

        <Person name="Shivam" age="22"> Loves Kavya</Person>
        <Person name="Kavya" age="21"/>
      </div>
    );
    // return React.createElement('div', {className: App}, React.createElement('h1', null, 'From react.create element!!'))
  }
}

export default App;
