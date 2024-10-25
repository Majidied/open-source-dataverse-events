import { Link, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
}

export default App;
