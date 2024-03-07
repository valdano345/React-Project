import './App.css';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Route, Routes, useRoutes } from 'react-router-dom';
import CarsRoute from './CarsRoute';
import Notfound from './Pages/NotFound'
import CarDetail from './Pages/CarDetail';
import SecondCar from './Pages/SecondCar';
import CarLayout from './CarLayout';
import Cars from './Pages/Cars';



function App() {

  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home/>
  //   },
  //   {
  //     path: "/about",
  //     element: <About/>
  //   },
  //   {
  //     path: "contact",
  //     element: <Contact/>
  //   },
  //   {
  //     path: "/cars",
  //     element: <CarLayout/>,
  //     children: [
  //       {
  //         index: true,
  //         element: <Cars/>
  //       },
  //       {
  //         path: ":id",
  //         element: <CarDetail/>
  //       },
  //       {
  //         path: "second",
  //         element: <SecondCar/>
  //       }
  //     ]
  //   }   
  // ])
  

  return (
    <>
      <Navigation />
      {/* {element} */}
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