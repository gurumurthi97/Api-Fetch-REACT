import React, { Component } from "react";

class ApiData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoaded: false,
    };
  }
  render() {
    return (
      <div
        style={{ minHeight: "400px", textAlign: "center", paddingTop: "18px" }}
      >
        {this.state.isLoaded ? (
          <div>
            <h1>Api default</h1>
            <img src={this.state.data.avatar} />
            <br />
            <strong>
              {this.state.data.first_name} {this.state.data.last_name}
            </strong>
            <br />
            <span>{this.state.data.email}</span>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
  fetchData() {
    console.log(this.state.data);

    this.setState({ ...this.state, isLoaded: false });

    fetch(`https://reqres.in/api/users/ ${this.props.pageNo}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        this.setState({ isLoaded: true, data: res.data });
      });
  }

  componentDidMount() {
    this.fetchData();
    //side effect
    // console.log(this.state.data);
    // this.setState({ ...this.state, isLoaded: false });
    // fetch(`https://reqres.in/api/users/ ${this.props.pageNo}`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     // console.log(res);
    //     this.setState({ isLoaded: true, data: res.data });
    //   });
  }
  componentDidUpdate(prevProps, prevState) {
    // //Prop update or state update
    // console.log("--------------------------------");
    // console.log(prevProps, prevState);
    // console.log(this.props, this.state);

    // console.log("--------------------------------");
    // this.fetchData();
    if (prevProps.pageNo !== this.props.pageNo) {
      this.fetchData();
    }
  }
}

export default ApiData;
