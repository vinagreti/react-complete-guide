import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import Person from "./Person/Person";
import "./Person/Person.css";

class App extends Component {
  state = {
    persons: [
      { name: "Bruno da Silva João", age: 10 },
      { name: "Denise Faccin", age: 11 },
    ],
  };

  switchNameHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 20 },
        { name: "Denise Faccin", age: 21 },
      ],
    });
    console.log("AQUI");
  };

  render() {
    const style = {
      backgroundColor: "white",
      color: "inherit",
      border: "1px solid teal",
      padding: "8px",
      cusor: "pointer",
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Presentation App</h1>
        </header>
        <div className="Persons">
          <button
            style={style}
            onClick={() =>
              this.switchNameHandler({ target: { cvalue: "Brururur" } })
            }
          >
            Switch Name
          </button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.switchNameHandler}
          />

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, {
              target: { cvalue: "Teste" },
            })}
          >
            Content Projected as props.children (children is the thing)
          </Person>
        </div>
      </div>
    );
  }
}

export default App;
