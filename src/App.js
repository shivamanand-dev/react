import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Shivam", age: 22 },
      { name: "Kavya", age: 21 },
      { name: "Shilpi", age: 28 }
    ],
    otherState: "some other value"
  };

  // console.log(personsState, otherState);

  switchNameHandler = newName => {
    // console.log("Clicked!")
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: "Kavya", age: 21 },
        { name: "Shilpi", age: 28 }
      ],
      otherState: "some other value"
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Shivam Anand", age: 22 },
        { name: "Kavya", age: 21 },
        { name: event.target.value, age: 28 }
      ],
      otherState: "some other value"
    });
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

    return (
      <div className="App">
        <h1>Hi, I am Shivam</h1>
        <p>Friend of Kavya!</p>

        <button
          style={style}
          onClick={() => this.switchNameHandler("Shivam Anand")}
        >
          Switch name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Shivam!")}
        >
          Loves {this.state.persons[1].name}
        </Person>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.nameChangeHandler}
        />
      </div>
    );
    // return React.createElement('div', {className: App}, React.createElement('h1', null, 'From react.create element!!'))
  }
}

export default App;
