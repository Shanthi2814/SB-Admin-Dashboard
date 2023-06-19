
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';




function App() {
  return (
    
   <div className='container-fluid bg-white min-vh-100'>
    <div className='row'>
      <div className='col-2 vh-100'>
      <Sidebar/>
      </div>
      <div className='col vh-100'>
        <Dashboard/>
      </div>
    </div>
   
   </div>
  );
}

export default App;
