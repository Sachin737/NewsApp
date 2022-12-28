import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
  render() {
    return (
      <div style={{ position: "sticky", width: "100%", top: "0", zIndex: "1" }}>
        <nav className={`navbar navbar-expand-lg bg-${this.props.mode === "dark" ? "light" : "dark"} navbar-${this.props.mode === "dark" ? "light" : "dark"} text-${this.props.mode === "dark" ? "dark" : "light"}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsApp
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <Link to="/business" className="nav-link">
                    Business
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/entertainment" className="nav-link">
                    Entertainment
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/general" className="nav-link">
                    General
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/health" className="nav-link">
                    Health
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/science" className="nav-link">
                    Science
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/sports" className="nav-link">
                    Sports
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/technology" className="nav-link">
                    Technology
                  </Link>
                </li>
              </ul>

              <div className="form-check form-switch">
                <input className="form-check-input" onClick={this.props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  <strong className={`${this.props.mode === "dark" ? "dark" : "light"}`}> {this.props.mode === "light" ? "Go Dark" : "Go Light"} </strong>
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
