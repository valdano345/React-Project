import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cars from './Pages/Cars';
import CarDetail from './Pages/CarDetail';
import SecondCar from './Pages/SecondCar';
import CarLayout from './CarLayout';

const CarsRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<CarLayout/>}>
                    <Route index element={<Cars />} />
                    <Route path=':id' element={<CarDetail />} />
                    <Route path='second' element={<SecondCar />} />
                </Route>
            </Routes>
        </div>
    )
}

export default CarsRoute