import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) =>{
    console.log(props);
    const assignedClasses  = [];
    let btnClass = '';
    if(props.showEmployee)
        btnClass = classes.Red;
    if(props.employee.length <=2){
      assignedClasses.push(classes.red);
    }
    if(props.employee.length <=1){
      assignedClasses.push(classes.bold);
  }
return (
        <div>
        <h1>{props.title} </h1>
                <p className={assignedClasses.join(' ')}>
                    It's is paragraph
                </p>
                <button className={btnClass}
                        onClick={props.clicked}>
                        Show Toggle
                </button>
        </div>
    );
};

export default cockpit;