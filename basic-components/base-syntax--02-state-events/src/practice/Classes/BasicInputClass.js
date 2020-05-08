import React from 'react'
import { Component } from "react";

class BasicInputClass extends Component{

    constructor(props){
        super(props)
        this.state = {name:"",age:""}
        this.changeTitleForName = this.changeTitleForName.bind(this)
        this.changeTitleForAge = this.changeTitleForAge.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    changeTitleForName(event){
        document.title = "You changed the value to "+event.target.value;
        this.setState({name: event.target.value});
    }
    changeTitleForAge(event){
        document.title = "You changed the value to "+event.target.value;
        this.setState({age: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
      }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.name} onChange={this.changeTitleForName} />
                Age:
                <input type="text" value={this.state.age} onChange={this.changeTitleForAge} />
                </label>            
                <input type="submit" value="Submit" />
            </form>
        );
    }

}

export default BasicInputClass