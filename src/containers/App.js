import React, { Component } from "react";
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "a1", name: "Shivam", age: 22 },
      { id: "a2", name: "Vipul", age: 26 },
      { id: "a3", name: "Shilpi", age: 28 }
    ],
    otherState: "some other value"
  };

  // console.log(personsState, otherState);
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClasses = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                value={person.name}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClasses = classes.red;
    }

    const assignedClasses = [];
    if (this.state.persons.length < 3) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length < 2) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am Shivam</h1>
        <p className={assignedClasses.join(" ")}>Hello World!</p>

        <button className={btnClasses} onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        {persons}
        <hr />
      </div>
    );
    // return React.createElement('div', {className: App}, React.createElement('h1', null, 'From react.create element!!'))
  }
}

export default App;
