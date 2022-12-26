import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { useState } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      TextColour: "text-dark",
    };
  }

  toggleMode = () => {
    this.setState({
      mode: this.state.mode === "dark" ? "light" : "dark",
      TextColour: this.state.TextColour === "text-dark" ? "text-light" : "text-dark",
    });
  };

  render() {
    return (
      <div>
        <Navbar TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode}></Navbar>
        {/* <News></News> */}
      </div>
    );
  }
}
