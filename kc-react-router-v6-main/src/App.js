import './App.css';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router-dom';
import CarsRoute from './CarsRoute';
import Notfound from './Pages/NotFound'


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cars/*' element={<CarsRoute/>}/>
        <Route path='/*' element={<Notfound/>}  /> 
      </Routes>

      <Routes>
        <Route path='/about' element={<div>sidebar</div>}/>
      </Routes>
    </>
  );
}

export default App;