import React, { Component } from 'react';
import './App.css';
import "./reset.css"
import routes from "./routes";
import Nav from "./Components/Nav";


class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
