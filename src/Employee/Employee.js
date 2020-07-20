import React from 'react'
import './Employee.css'; 
const employee = (props) => {
     const styles = {
          '@media (min-width: 500px)': {
               width: '450px',
               bacground:'gray'
          }
     };
return ( 
    <div className="Employee" style={ styles }>
         <p onClick={props.click}><strong>I'm  {props.name} , I am {props.age} year old </strong></p>
         <input type="text" onChange={props.change} value={props.name}/>
         <p>{props.children}</p>

    </div>
   )
};
 export  default employee;