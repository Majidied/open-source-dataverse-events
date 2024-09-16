import { Link, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
         <div></div>
      <Outlet />
    </div>
  );
}

export default App;
