import React from 'react'

function Cars({cars}) {
  const allCars = cars.map((car)=> {
    return(
      <div key={car.id} className="card m-2" style={{width: "18rem"}}>
      <img src={car.image} className="card-img-top m-2" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{car.make}</h5>
      <p className="card-text">{car.model}</p>
      <p className="card-text">{car.year}</p>
      <h3 className="card-title">{car.type}</h3>
      <a href="#!" className="btn btn-primary">Ksh {car.price}</a>
      </div>
    </div>
    )
  })

  return (
    <div className="row">
     {allCars}
    </div>
  )
}

export default Cars