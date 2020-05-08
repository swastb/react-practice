import React, { Component } from "react";

class BasicClassCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    componentDidMount() {    console.log('mount');document.title = `In component Did mount You clicked ${this.state.count} times`;  } 
    componentDidUpdate() {    console.log('update');document.title = `In component did update You clicked ${this.state.count} times`;  }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }

  export default BasicClassCounter