import React, {  Component } from 'react';
import classes from './App.css';
//import Radium from 'radium'
import Employees from '../components/Employees/Emp';
import Cockpit from '../components/Cockpit/Cockpit';
class App  extends Component  {
  constructor( props ) {
   super(props);
   console.log('[App.js] constructor');
  }
  state  = {
    employee: [
      { id:'NK5050747', name:'Nasruddin', age:27},
      { id:'AK5050747', name:'Anas', age:10},
      { id: 'JK5050747', name:'Jalaluddin', age:23}
    ],
    showEmployee: false
  };
  static getDerivedStateFromProps( props, state ) {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }
  
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
componentDidMount(){
  console.log('[App.js] component mount')
}
shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true;
 }
 componentDidUpdate(){
  console.log(' [App.js] componentDidUpdate')

 }
 render() {
  console.log(' [App.js] render')
  let  employee = null;
  if ( this.state.showEmployee ) {
    employee = (
              <div>
                <Employees emp={this.state.employee}
                          clicked={this.deleteEmployeeHandler}
                          changed = {this.changeNameEventHandler}/>
              </div>
             )
  }


  return (
      <div className={classes.App}>
        <Cockpit 
          showEmployee={this.state.showEmployee}
          title={this.props.headerTitle}
          employee = {this.state.employee}
          clicked={this.showtoggleEmployeeHandler}/>
          {employee}
      </div>
    );
  }

};

export default App ;
