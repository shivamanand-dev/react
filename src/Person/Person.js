import React from "react";
import classes from "./Person.css";

var person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} yrs old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.value} />
    </div>
  );
};

export default person;
