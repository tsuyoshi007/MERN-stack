import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import axios from "axios";
import MUIDataTable from "mui-datatables";

let i=0;
let j=0;

const columns = [
  {
    name: "Name",
    options: {
      filter: false
    }
  },
  {
    name: "Age",
    options: {
      filter: false
    }
  },
  {
    name: "Gender",
    options: {
      filter: false
    }
  }
];

let data = [];

const options = {
  filterType: "dropdown",
  responsive: "scroll",
  filter: true
};

export default class find extends Component {
  render() {
    return (
      <MUIDataTable
        title={"Profile List"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
  constructor(props) {
    super(props);

    
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/createprofile/")
      .then(response => {
        var temp=[];
        for (j=0;j<response.data.length;j++) {
          for (i in response.data) {
            temp.push(i.name);
            temp.push(i.age);
            temp.push(i.gender);
            
          }
          console.log(temp);
          data.push(temp);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
