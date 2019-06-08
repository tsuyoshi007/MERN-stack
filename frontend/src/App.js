import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import home from "./components/home.js";
import find from "./components/find.js";
import update from "./components/update.js";
import submit from "./components/create.js";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to= "/">
              <img src={logo} width="30" height="30" alt="react" />
            </Link>
            <Link to="/" className="navbar-brand">
              MERN stack demo
            </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/submit" className="nav-link">
                    Create Profile
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/find" className="nav-link">
                    Find Profile
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/update/:id" className="nav-link">
                    Update your profile
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={home} />
          <Route path="/find" component={find} />
          <Route path="/update/:id" component={update} />
          <Route path="/submit" component={submit} />
        </div>
      </Router>
    );
  }
}

export default App;
