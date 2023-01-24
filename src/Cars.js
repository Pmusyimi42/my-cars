import React from 'react'

function Cars({cars}) {
  const allCars = cars.map((car)=> {
    console.log(car.image)
    return(
      <div key={car.id} className="card" style={{width: "18rem"}}>
      <img src={car.image} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{car.make}</h5>
      <p className="card-text">{car.model}</p>
      <p className="card-text">{car.year}</p>
      <h3 className="card-title">{car.type}</h3>
      <a href="#!" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    )
  })

  return (
    <div>
     {allCars}
    </div>
  )
}

export default Cars