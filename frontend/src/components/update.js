import React, { Component } from "react";
import "./home.css";
import axios from "axios";

export default class update extends Component {
  render() {
    return (
      <div>
        <div style={{ marginTop: 10 }}>
          <h3>Update your profile</h3>
          <form onSubmit={this.onUpdate}>
            <div className="form-group">
              <label>Name: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onChangename}
              />
            </div>
            <div className="form-group">
              <label>Age: </label>
              <input
                type="number"
                className="form-control"
                value={this.state.age}
                onChange={this.onChangeage}
              />
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Male"
                  checked={this.state.gender === "Male"}
                  onChange={this.onChangegender}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Female"
                  checked={this.state.gender === "Female"}
                  onChange={this.onChangegender}
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>

            <div className="form-group">
              <input type="submit" value="Create" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
