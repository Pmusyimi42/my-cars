import React from 'react'
import Car from './Car'
import Search from './Search'

function Cars({cars, handleDelete, search}) {   
   console.log(search)
   let displayedCars;
   const result = cars.filter(car => {
    if (search === "") return true
    return (JSON.stringify(car).toLowerCase()).match(search.toLowerCase())
   })
   displayedCars = result.map((car, index)=> {
    return(
      <>
      <Car key={index} image= {car.image} make = {car.make} 
      model = {car.model} type = {car.type} price = {car.price}
      year={car.year} id= {car.id} handleDelete= {handleDelete}/>
      </>
      )

  })

  return (
    <div className='row'>
     {displayedCars}
    </div>
  )
}

export default Cars