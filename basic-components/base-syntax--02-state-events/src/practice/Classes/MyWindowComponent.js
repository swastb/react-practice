import React, { Component } from "react";

class MyWindowComponent extends Component {
  
  state = { width: window.innerWidth };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () =>
    this.setState({ width: window.innerWidth });

  render() {
    return (
      <h1>{this.state.width}</h1>
    );
  }
}

export default MyWindowComponent