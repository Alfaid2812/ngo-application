import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import CreateEvent from './CreateEvent';
import Home from './Home';

function App() {
  return (
    <>
    <div>
    <BrowserRouter>

    <switch>
      <Routes>
        <Route path='/Navbar' exact Component={Navbar}></Route>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/home' Component={Home}></Route>
        <Route path='/CreateEvent' Component={CreateEvent}></Route>
      </Routes>
    </switch>
    </BrowserRouter>
    </div>
  
   </>
  );
}

export default App;
