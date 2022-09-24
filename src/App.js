import React from "react";
import { Component } from "react";
import "./App.css";
import ApiData from "./components/ApiData";
import NavLinks from "./components/NavLink";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 2,
    };
    this.setPageNo = this.setPageNo.bind(this);
  }
  setPageNo(newPageNo) {
    this.setState({ pageNo: newPageNo });
  }
  render() {
    return (
      <div>
        <h1>Hai</h1>
        <ApiData pageNo={this.state.pageNo} />
        <NavLinks pageNo={this.state.pageNo} setPageNo={this.setPageNo} />
        {/* 
           Add Some Props in NavLink
        */}
      </div>
    );
  }
}

export default App;
