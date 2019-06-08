import React, { Component } from "react";
import axios from "axios";
export default class create extends Component {
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create your profile</h3>
        <form onSubmit={this.onSubmit}>
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
    );
  }

  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangegender = this.onChangegender.bind(this);
    this.onChangeage = this.onChangeage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      gender: "",
      age: "",
    };
  }
  onChangename(x) {
    this.setState({
      name: x.target.value
    });
  }
  onChangegender(x) {
    this.setState({
      gender: x.target.value
    });
  }
  onChangeage(x) {
    this.setState({
      age: x.target.value
    });
  }

  onSubmit(x) {
    x.preventDefault();

    console.log(`Profile submitted:`);
    console.log(`Name: ${this.state.name}`);
    console.log(`Age: ${this.state.age}`);
    console.log(`Gender: ${this.state.gender}`);

    const newTodo = {
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender
    };

    axios
      .post("http://localhost:4000/createprofile/create", newTodo)
      .then(res => console.log(res.data));

    this.setState({
      name: "",
      gender: "",
      age: ""
    });
  }
}
