import React, { Component } from "react";
import logo from "../images/logo.jpeg";

export default class home extends Component {
  render() {
    return (
      <div>
        <p>Welcome to MERN stack demo!!</p>
        <img src={logo} alt="MERN stack" width="700px" />
      </div>
    );
  }
}
