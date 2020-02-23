import React from "react";

var person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} yrs old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={} />
    </div>
  );
};

export default person;
