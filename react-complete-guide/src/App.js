import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: "Bruno da Silva João", age: 10 }],
  };

  switchNameHandler = () => {
    this.setState({ persons: [{ name: "se da crapa", age: 20 }] });
    console.log("AQUI");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Presentation App</h1>
        </header>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person age={this.state.persons[0].age} />
      </div>
    );
  }
}

export default App;
