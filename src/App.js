import Staff from './components/Staff';

function App() {
  //variables and states should be written before return

  const showStaff = true;
  return (
   
    <div className="App">
      
       {showStaff ? 
       <>
        <Staff name="Begim" role="Intern" />
        <Staff name="Abby"/>
        <Staff name="Haley"  />
        </>
        : 
        <p>Can't see the employees</p>
      }
      
    </div>
  );
}
export default App;