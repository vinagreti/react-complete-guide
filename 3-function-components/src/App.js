import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [{ name: "Bruno da Silva João", age: 10 }],
    otherState: "another state",
  });

  const switchNameHandler = () => {
    setPersonsState({ persons: [{ name: "se da crapa", age: 20 }] });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Presentation App</h1>
      </header>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person age={personsState.persons[0].age} />
    </div>
  );
};

export default app;
