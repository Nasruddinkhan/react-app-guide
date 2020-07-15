import React from 'react'
const employee = (props) => {
return ( 
    <div>
         <p><strong>I'm  {props.name} , I am {props.age} year old </strong></p>
         <p>{props.children}</p>
    </div>
   )
};

 export  default employee;