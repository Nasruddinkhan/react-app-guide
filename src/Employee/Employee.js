import React from 'react'
import './Employee.css'; 
const employee = (props) => {
return ( 
    <div className="Employee">
         <p onClick={props.click}><strong>I'm  {props.name} , I am {props.age} year old </strong></p>
         <input type="text" onChange={props.change} value={props.name}/>
         <p>{props.children}</p>

    </div>
   )
};
 export  default employee;