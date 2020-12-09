import React, { Component } from "react";

const ThemeContext = React.createContext("light");

export class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

class ThemeButton extends Component {
  static contextType = ThemeContext;
  render() {
    return <button>{this.context}</button>;
  }
}
