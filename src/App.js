import './index.css';
import React, {useState} from 'react';
import Staff from './components/Staff';
import {v4 as uuidv4} from 'uuid';

function App() {
  //variables and states should be written before return
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      name: "Caleb", 
      role: "developer", 
      img:'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg',
    },
    {
      name: "Begim", 
      role: "developer", 
      img:'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg',
    },
    {
      name: "Sheroz", 
      role: "developer", 
      img:'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
    {
      name: "Leila", 
      role: "developer", 
      img:'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg',
    },
    {
      name: "Greta", 
      role: "developer", 
      img:'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg',
    }
  ]);

  const showStaff = true;
  return (
   
    <div className="App">
      
       {showStaff ? 
       <>
       <input type="text" onChange={(e) => {
          //console.log(e.target.value)
          setRole(e.target.value);
        }} />
        <div className='flex flex-wrap justify-center'> 
        {employees.map((employee) => {
          return(
            <Staff key={uuidv4()} name={employee.name} role={employee.role} img={employee.img} />
          )
        })}
        </div>
        </>
        : 
        <p>Can't see the employees</p>
      }
      
    </div>
  );
}
export default App;