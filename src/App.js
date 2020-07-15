import React, { useState } from 'react';
import './App.css';
import Employee from './Employee/Employee'
const App  = props =>  {
   const [ employeeState, setEmployeeState ] = useState({
      employee: [
        { name:'Nasruddin', age:27},
        { name:'Anas', age:10},
        { name:'Jalaluddin', age:23}
      ]
    });

const changeNameHandler = () => {
  console.log('switch name');
  setEmployeeState({
    employee: [
      { name:'Jalaluddin', age:27},
      { name:'Anas', age:10},
      { name:'Nasruddin', age:23}
    ]
  });
};

 //render() {
  return (
    <div className="App">
      <h1>Hi Nasruddin, <br/> This is your first react App </h1>
      <p>It's is paragraph</p>
      <button onClick={changeNameHandler}>Switch Name</button>
      <Employee 
        name={employeeState.employee[0].name} 
        age={employeeState.employee[0].age}> My Hobbies : Playing cricket</Employee>
      <Employee 
        name={employeeState.employee[1].name}
        age = {employeeState.employee[1].age}/>
      <Employee 
        name={employeeState.employee[2].name} 
        age={employeeState.employee[2].age}/>
    </div>
  );
//  }
//  return React.createElement('div', {className : 'App'},  React.createElement('h1', null, 'Hi', '\ Nasruddin, <br/> This is your first react App '));
};

export default App ;
