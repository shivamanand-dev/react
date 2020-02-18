import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props=> {
  const [ personsState, setPersonsState ] = useState({
    persons : [
      {name : "Shivam", age: 22},
      {name : "Kavya", age: 21}
    ],
    otherState: 'some other value'
  })

    return (
      <div className="App">
        <h1>Hi, I am Shivam</h1>
        <p>Friend of Kavya!</p>

        <button onClick={this.switchNameHandler}>Switch name</button>

        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> Loves {personsState.persons[1].name}</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      </div>
    );
    // return React.createElement('div', {className: App}, React.createElement('h1', null, 'From react.create element!!'))
  }

export default app;

switchNameHandler = () =>{
  // console.log("Clicked!")
  this.setState({
    persons : [
      {name : "Shivam Anand", age: 22},
      {name : "Kavya", age: 21}
    ]
  })
}
