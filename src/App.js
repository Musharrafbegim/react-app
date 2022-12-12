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
        <Staff name="Begim" role="Intern" />
        <Staff name="Abby" role={role}/>
        <Staff name="Haley"  />
        </>
        : 
        <p>Can't see the employees</p>
      }
      
    </div>
  );
}
export default App;