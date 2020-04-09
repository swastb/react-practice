import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import StatefulComponent from './practice/StatefulComponent'
import StatelessComponent from './practice/StatelessComponent'
import InteractiveComponent from './practice/InteractiveComponent'
import StatelessComponentWithClass from './practice/StatelessComponentWithClass'



class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  myFunction = ()=> {
    console.log('Hello');
  };

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  render () {
    return (      
      <div className="App">


        <p>Below is stateless Component</p>
        <StatelessComponent title="Hello" subtitle="SubTitle" onClick={this.myFunction}/>

        <p>Below is stateless With class Component</p>
        <StatelessComponentWithClass title="Hello from class" subtitle="SubTitle from class" onClick={this.myFunction}/>

        

        <p>Below is stateful Component</p>
        <StatefulComponent/>

        <p>Below is interactive components</p>
        <InteractiveComponent/>

        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
