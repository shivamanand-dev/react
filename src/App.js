import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Shivam", age: 22 },
      { name: "Kavya", age: 21 },
      { name: "Shilpi", age: 28 }
    ],
    otherState: "some other value"
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("Clicked!")
    setPersonsState({
      persons: [
        { name: "Shivam Anand", age: 22 },
        { name: "Kavya", age: 21 },
        { name: "Shilpi", age: 28 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am Shivam</h1>
      <p>Friend of Kavya!</p>

      <button onClick={switchNameHandler}>Switch name</button>

      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        click={switchNameHandler}
      >
        Loves {personsState.persons[1].name}
      </Person>

      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />

      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement('div', {className: App}, React.createElement('h1', null, 'From react.create element!!'))
};

export default app;
