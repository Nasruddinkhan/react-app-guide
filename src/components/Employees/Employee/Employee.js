import React, { Component } from 'react'
import classess from  './Employee.css'; 
class Employee extends Component {
    render(){
     console.log('Employee.js rendering');
     return ( 
          <div className={classess.Employee}>
               <p onClick={this.props.click}><strong>I'm  {this.props.name} , I am {this.props.age} year old </strong></p>
               <input type="text" onChange={this.props.change} value={this.props.name}/>
               <p>{this.props.children}</p>
      
          </div>
         )
    }
};
 export  default Employee;