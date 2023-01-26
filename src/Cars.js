import React from 'react'
import Car from './Car'

function Cars({cars, handleDelete}) {
  const allCars = cars.map((car, index)=> {
    return(

      <Car key={index} image= {car.image} make = {car.make} 
      model = {car.model} type = {car.type} price = {car.price}
      year={car.year} id= {car.id} handleDelete= {handleDelete}/>)

  })

  return (
    <div className='row'>
     {allCars}
    </div>
  )
}

export default Cars