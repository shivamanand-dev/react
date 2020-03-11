import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const assignedClasses = [];
  let btnClasses = "";
  if (props.showPerson) {
    btnClasses = classes.red;
  }

  if (props.persons.length < 3) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length < 2) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I am Shivam</h1>
      <p className={assignedClasses.join(" ")}>Hello World!</p>

      <button className={btnClasses} onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  );
};

export default cockpit;
