import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      TextColour: "text-dark",
      progress: 0,
    };
    document.body.style.backgroundColor = "rgb(227 227 227 / 49%)";
  }

  toggleMode = () => {
    if (this.state.mode === "light") {
      document.body.style.backgroundColor = "rgb(17 20 22)";
    } else {
      document.body.style.backgroundColor = "rgb(227 227 227 / 49%)";
    }

    this.setState({
      mode: this.state.mode === "dark" ? "light" : "dark",
      TextColour: this.state.TextColour === "text-dark" ? "text-light" : "text-dark",
    });
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  render() {
    return (
      <Router>
        <div>
          <LoadingBar height={3} color="#f11946" progress={this.state.progress} />

          <Navbar TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode}></Navbar>

          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="general"></News>} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="business"></News>} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="entertainment"></News>} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="general"></News>} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="health"></News>} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="science"></News>} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="sports"></News>} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" TextColour={this.state.TextColour} mode={this.state.mode} toggleMode={this.toggleMode} category="technology"></News>} />
          </Routes>
        </div>
      </Router>
    );
  }
}
