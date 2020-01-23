import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name : "Shivam", age: 22},
      {name : "Kavya", age: 21}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am Shivam</h1>
        <p>Friend of Kavya!</p>

        <button>Switch name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> Loves {this.state.persons[1].name}</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    );
    // return React.createElement('div', {className: App}, React.createElement('h1', null, 'From react.create element!!'))
  }
}

export default App;
