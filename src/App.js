import './index.css';
import React, {useState} from 'react';
import Staff from './components/Staff';

function App() {
  //variables and states should be written before return
  const [role, setRole] = useState('dev');

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
        <Staff name="Begim" role="Intern" img="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Staff name="Abby" role={role} img="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Staff name="Abby" role={role} img="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Staff name="Abby" role={role} img="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Staff name="Abby" role={role} img="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
        </>
        : 
        <p>Can't see the employees</p>
      }
      
    </div>
  );
}
export default App;