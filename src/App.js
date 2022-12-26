import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      TextColour: "text-dark",
    };
    document.body.style.backgroundColor = "rgb(161 161 161 / 49%)";
    document.title = "TextUtils - Light Mode";
  }

  toggleMode = () => {
    if (this.state.mode === "light") {
      document.body.style.backgroundColor = "rgb(11 22 38 / 87%)";
      document.title = "TextUtils - Dark Mode";
    } else {
      document.body.style.backgroundColor = "rgb(161 161 161 / 49%)";
      document.title = "TextUtils - Light Mode";
    }

    this.setState({
      mode: this.state.mode === "dark" ? "light" : "dark",
      TextColour: this.state.TextColour === "text-dark" ? "text-light" : "text-dark",
    });
  };

  render() {
    return (
      <div>
        <Navbar TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode}></Navbar>
        <News TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode}></News>
      </div>
    );
  }
}
