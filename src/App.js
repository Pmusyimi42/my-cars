import './App.css';
import Cars from './Cars';
import React, { useEffect , useState} from 'react';
import PostCars from './PostCars';
import Services from './Services';
import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';

function App() {
  const [cars, setCars] = useState([])
  useEffect (()=> {
    fetch ("http://localhost:5001/cars")
    .then((response) => response.json())
    .then((car) => setCars(car))
  },[])
  // console.log(cars)

  function handleDeleteCar(e) {
    const deletedCar = parseInt(e.target.parentNode.parentNode.id)
  const updatedCars = cars.filter((car) => {
    return car.id !== deletedCar
  });
    setCars(updatedCars);
  }

  return (
  <div>
    <Navbar/>
    <Routes>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/cars' element = {<Cars cars = {cars} handleDelete = {handleDeleteCar}/>}/>
      <Route path='/postCars' element = {<PostCars/>}/>
      <Route path='/services' element = {<Services/>}/>
    </Routes>
   </div>
  );
}

export default App;

