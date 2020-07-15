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
changeNameEventHandler = (event) => {
  console.log('switch name');
  this.setState({
    employee: [
      { name:event.target.value, age:27},
      { name:'Anas', age:10},
      { name:'Jalaluddin', age:23}
    ]
  });
};
 render() {
  const btnStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid #BBB',
    padding: '8px',
    cursor: 'pointer',
    borderRadius:'5px'
  };
  return (
    <div className="App">
      <h1>Hi Nasruddin, <br/> This is your first react App </h1>
      <p>It's is paragraph</p>
      <button style={btnStyle} onClick={() => this.changeNameHandler('Jallu khana')}>Switch Name</button>
      <Employee 
        name={this.state.employee[0].name} 
        change={this.changeNameEventHandler}
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
