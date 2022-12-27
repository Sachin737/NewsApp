import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      TextColour: "text-dark",
    };
    document.body.style.backgroundColor = "rgb(227 227 227 / 49%)";
    document.title = "TextUtils - Light Mode";
  }

  toggleMode = () => {
    if (this.state.mode === "light") {
      document.body.style.backgroundColor = "rgb(11 22 38 / 87%)";
      document.title = "TextUtils - Dark Mode";
    } else {
      document.body.style.backgroundColor = "rgb(227 227 227 / 49%)";
      document.title = "TextUtils - Light Mode";
    }

    this.setState({
      mode: this.state.mode === "dark" ? "light" : "dark",
      TextColour: this.state.TextColour === "text-dark" ? "text-light" : "text-dark",
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode}></Navbar>

          <Routes>
            <Route exact path="/" element={<News key="general" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="general"></News>} />
            <Route exact path="/business" element={<News key="business" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="business"></News>} />
            <Route exact path="/entertainment" element={<News key="entertainment" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="entertainment"></News>} />
            <Route exact path="/general" element={<News key="general" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="general"></News>} />
            <Route exact path="/health" element={<News key="health" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="health"></News>} />
            <Route exact path="/science" element={<News key="science" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="science"></News>} />
            <Route exact path="/sports" element={<News key="sports" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="sports"></News>} />
            <Route exact path="/technology" element={<News key="technology" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="technology"></News>} />
          </Routes>
        </div>
      </Router>
    );
  }
}
