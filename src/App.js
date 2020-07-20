import React, { useState, Component } from 'react';
import classes from './App.css';
import Radium from 'radium'
import Employee from './Employee/Employee'
class App  extends Component  {
state = {
  employee: [
    { id:'NK5050747', name:'Nasruddin', age:27},
    { id:'AK5050747', name:'Anas', age:10},
    { id: 'JK5050747', name:'Jalaluddin', age:23}
  ],
  showEmployee: false
};
deleteEmployeeHandler = (empIndex) => {
  console.log(empIndex);
  const employee = [...this.state.employee];
  employee.splice(empIndex, 1)
  this.setState({employee:employee}); 
}
showtoggleEmployeeHandler = () =>{
  const showEmp = this.state.showEmployee;
  this.setState({showEmployee :!showEmp});
}
changeNameEventHandler = (event, id ) => {
  console.log('switch name', id);
  const empIndex =  this.state.employee.findIndex( emp =>{
                      return emp.id === id;
                    });
  const emp = {
        ...this.state.employee[empIndex]
      };
  emp.name = event.target.value;
  const employees = [...this.state.employee]
  employees[empIndex] = emp;
  this.setState({
  employee:employees
  });
};

 render() {
  const btnStyle = {
    backgroundColor: 'green',
    color:'white',
    font: 'inherit',
    border: '1px solid #BBB',
    padding: '8px',
    cursor: 'pointer',
    borderRadius:'5px',
    ':hover':{
      backgroundColor:'lightgreen',
      color:'black'
    }
  };
  
  let  employee = null;
  if ( this.state.showEmployee ) {
    employee = (
    <div>
      {this.state.employee.map( (emp, index) => {
          return <Employee
                  name={emp.name}
                  age={emp.age}
                  key={emp.id}
                  click={() => this.deleteEmployeeHandler(index)}
                  change={(event) => this.changeNameEventHandler(event, emp.id)}
                />
        })}
    </div>
    )
    btnStyle.backgroundColor = 'red';
    btnStyle[':hover'] ={
      backgroundColor:'lightgreen',
      color:'black'
    }
  }
const assignedClasses  = [];
    if(this.state.employee.length <=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.employee.length <=1){
      assignedClasses.push(classes.bold);
  }

  return (
      <div className={classes.App}>
        <h1>Hi Nasruddin, <br/> This is your first react App </h1>
        <p className={classes.join(' ')}>It's is paragraph</p>
        <button style={btnStyle}
        // onClick={() => this.changeNameHandler('Jallu khana')}
        onClick={this.showtoggleEmployeeHandler}
        >Show Toggle </button>
        {employee}
      </div>
    );
  }

};

export default Radium(App) ;
