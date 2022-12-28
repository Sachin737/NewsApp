import React, { Component } from "react";
import loadingLight from "./loadingLight.gif";
import loadingDark from "./loadingDark.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={this.props.mode === "dark" ? loadingLight : loadingDark} alt="loading" />
      </div>
    );
  }
}

export default Spinner;
