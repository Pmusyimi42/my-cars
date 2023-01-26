import React from 'react'

export default function 
({image, make, model, year, type, price, id, handleDelete}) {
  return (
    <div id = {id}  className="card m-2" style={{width: "18rem"}}>
      <img src={image} className="card-img-top m-2" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{make}</h5>
      <p className="card-text">{model}</p>
      <p className="card-text">{year}</p>
      <h3 className="card-title">{type}</h3>
      <a href="#!" className="btn btn-primary">{price}</a>
      <a href="#!" onClick={handleDelete} className="btn btn-danger">X</a>

      </div>
    </div>
  )
}
