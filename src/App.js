import React, { useState, Component } from 'react';
import './App.css';
import Employee from './Employee/Employee'
class App  extends Component  {
state = {
  employee: [
    { name:'Nasruddin', age:27},
    { name:'Anas', age:10},
    { name:'Jalaluddin', age:23}
  ]
};

 changeNameHandler = (newName) => {
  console.log('switch name');
  this.setState({
    employee: [
      { name:newName, age:27},
      { name:'Anas', age:10},
      { name:'Nasruddin', age:23}
    ]
  });
};

 render() {
  return (
    <div className="App">
      <h1>Hi Nasruddin, <br/> This is your first react App </h1>
      <p>It's is paragraph</p>
      <button onClick={() => this.changeNameHandler('Jallu khana')}>Switch Name</button>
      <Employee 
        name={this.state.employee[0].name} 
        age={this.state.employee[0].age} click={ ()=> this.changeNameHandler( 'Nasruddin khan')}> My Hobbies : Playing cricket</Employee>
      <Employee 
        name={this.state.employee[1].name}
        age = {this.state.employee[1].age}/>
      <Employee 
        name={this.state.employee[2].name} 
        age={this.state.employee[2].age}/>
    </div>
  );
  }

};

export default App ;
