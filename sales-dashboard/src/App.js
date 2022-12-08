import logo from './logo.svg';
import './App.css';
import { Sidebar } from './Components/Sidebar';
import { Navbar } from './Components/Navbar';
import { AnalyticsandReminder } from './Components/Analytics&Reminder';
import { Recent } from './Components/Recent';


function App() {
  return (
    <div className='App'>
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='main' >
             <Navbar/>
             <AnalyticsandReminder/>
             <Recent/>
      </div>
      <div className='right-box'>

      </div>
    </div>
  );
}

export default App;
