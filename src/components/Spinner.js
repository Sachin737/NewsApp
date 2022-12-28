import React from "react";
import loadingLight from "./loadingLight.gif";
import loadingDark from "./loadingDark.gif";

const Spinner = (props) => {
  return (
    <div className="text-center">
      <img src={props.mode === "dark" ? loadingLight : loadingDark} alt="loading" />
    </div>
  );
};

export default Spinner;
