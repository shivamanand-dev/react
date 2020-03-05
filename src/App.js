import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "a1", name: "Shivam", age: 22 },
      { id: "a2", name: "Vipul", age: 26 },
      { id: "a3", name: "Shilpi", age: 28 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  // console.log(personsState, otherState);
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Shivam Anand", age: 22 },
        { name: "Vipul", age: 26 },
        { name: event.target.value, age: 28 }
      ],
      otherState: "some other value"
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      background: "#fff",
      padding: "8px",
      font: "inherit",
      borderRadius: "5px",
      cursor: "pointer",
      border: "3px solid #ccc"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am Shivam</h1>
        <p>Hello World!</p>

        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: App}, React.createElement('h1', null, 'From react.create element!!'))
  }
}

export default App;
