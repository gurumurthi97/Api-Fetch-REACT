import React, { Component } from "react";

class NavLinks extends Component {
  constructor() {
    super();
  }
  render() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    return (
      <div class="btn-group w-100 " role="group" aria-label="Basic example">
        {/* <button type="button" class="btn btn-primary">
          1
        </button>
        <button type="button" class="btn btn-secondary">
          2
        </button>
        <button type="button" class="btn btn-secondary">
          3
        </button>
        <button type="button" class="btn btn-secondary">
          4
        </button>
        <button type="button" class="btn btn-secondary">
          5
        </button>
        <button type="button" class="btn btn-secondary">
          6
        </button> */}
        {/* {console.log(this.props.pageNo)} */}
        {/* {arr.map((e) => {
          return (
            <button
              type="button"
              className={
                "btn" +
                (e === this.props.pageNo ? "btn-primary" : "btn-secondery")
              }
            >
              {e}
            </button>
          );
        })} */}
        {arr.map((e) => {
          return (
            <button
              type="button"
              class={
                "btn " +
                (e === this.props.pageNo ? "btn-primary" : "btn-secondery")
              }
              onClick={() => this.props.setPageNo(e)}
            >
              {e}
            </button>
          );
        })}
      </div>
    );
  }
}
export default NavLinks;
