import Employee from './Employee/Employee'
import React, { Component }  from 'react';


class Employees  extends Component{

/* componentWillReceiveProps(props){
 console.log('[Employees.js] componentWillReceiveProps');

} */
 shouldComponentUpdate(nextProps, nextState){
 console.log('[Employees.js] shouldComponentUpdate');
 return true;
}
getSnapshotBeforeUpdate(prevProps, prevState){
console.log('[Employees.js] getSnapshotBeforeUpdate');
return {message:' Snapshot !'}
}
componentDidUpdate(prevProps, prevState, snapshot){
 console.log('[Employees.js] componentDidUpdate');
 console.log(snapshot);
 
}
render(){
 console.log('Emp.js rendering');
 return this.props.emp.map( (emp, index) => {
        return <Employee
                name={emp.name}
                age={emp.age}
                key={emp.id}  
                click={() => this.props.clicked(index)}
                change={(event) => this.props.changed(event, emp.id)}
        />
});
}

}
  export default Employees;