import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
require("dotenv").config();

const App = () => {
  const [mode, Setmode] = useState("light");
  const [TextColour, setTextColour] = useState("text-dark");
  const [progress, setProgress] = useState(0);

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "rgb(17 20 22)";
    } else {
      document.body.style.backgroundColor = "rgb(227 227 227 / 49%)";
    }

    Setmode(mode === "dark" ? "light" : "dark");
    setTextColour(TextColour === "text-dark" ? "text-light" : "text-dark");
  };

  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <Router>
      <div>
        <LoadingBar height={3} color="#f11946" progress={progress} />

        <Navbar TextColour={TextColour} mode={mode} toggleMode={toggleMode}></Navbar>

        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" TextColour={TextColour} mode={mode} category="general"></News>} />
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" TextColour={TextColour} mode={mode} category="business"></News>} />
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" TextColour={TextColour} mode={mode} category="entertainment"></News>} />
          <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" TextColour={TextColour} mode={mode} category="general"></News>} />
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" TextColour={TextColour} mode={mode} category="health"></News>} />
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" TextColour={TextColour} mode={mode} category="science"></News>} />
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" TextColour={TextColour} mode={mode} category="sports"></News>} />
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" TextColour={TextColour} mode={mode} category="technology"></News>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
