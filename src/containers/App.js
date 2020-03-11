import React, { Component } from "react";
import Cockpit from "../components/cockpit/Cockpit";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";

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

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPerson={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
        <hr />
      </div>
    );
    // return React.createElement('div', {className: App}, React.createElement('h1', null, 'From react.create element!!'))
  }
}

export default App;
