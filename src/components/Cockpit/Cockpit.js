import React ,{useEffect} from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) =>{

    console.log(props);

    useEffect(()=>{
      console.log('[cockpit.js] useEffect');
      const timer =  setTimeout(()=>{
        alert('saved employee data');
      },1000);
      return ()=>{
        clearTimeout(timer);
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    },[]); //[] it's work only one  time //props.employee)

    useEffect(()=>{
      console.log('[cockpit.js] useEffect 2');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect ');
      }
    });
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

export default Cockpit;