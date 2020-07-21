import Employee from './Employee/Employee'
import React  from 'react';

const emp = (props) => props.emp.map( (emp, index) => {
    return <Employee
            name={emp.name}
            age={emp.age}
            key={emp.id}  
            click={() => props.clicked(index)}
            change={(event) => props.changed(event, emp.id)}
          />
  });

  export default emp;