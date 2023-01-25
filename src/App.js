import './App.css';
import Cars from './Cars';
import React, { useEffect , useState} from 'react';
import PostCars from './PostCars';


function App() {
  const [cars, setCars] = useState([])
  useEffect (()=> {
    fetch ("http://localhost:5001/cars")
    .then((response) => response.json())
    .then((car) => setCars(car))
  },[])
  // console.log(cars)

  return (
  <div>
    <PostCars/>
    <Cars cars = {cars}/>
   </div>
   
  );
}

export default App;
