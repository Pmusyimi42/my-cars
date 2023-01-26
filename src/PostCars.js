import React, {useState} from 'react';

const PostCars = () => {

    const [postedCar, setPostedCar] =useState(
        {
        year: 2008, 
        make: "Buick", 
        model: "Enclave", 
        type: "SUV",
        image: "https://m.atcdn.co.uk/vms/media/93f6e5e2bf4e494785ff134b1676c890.jpg",
        price: 850000
    })
    
    return (
        <div>
            <form className="row g-3">
                <div className="col-auto">
                    <input type="number" onChange= {e=>console.log(e.target.value)} min= {1999} className="form-control" id="inputPassword2" placeholder="year"/>
                </div>
                <div className="col-auto">
                    <input type="text" onChange= {e=>console.log(e.target.value)} className="form-control" id="inputPassword2" placeholder="Make"/>
                </div>
                <div className="col-auto">
                    <input type="text" onChange= {e=>console.log(e.target.value)} className="form-control" id="inputPassword2" placeholder="Model"/>
                </div>
                <div className="col-auto">
                    <input type="text" onChange= {e=>console.log(e.target.value)} className="form-control" id="inputPassword2" placeholder="Type"/>
                </div>
                <div className="col-auto">
                    <input type="number" onChange= {e=>console.log(e.target.value)} min = {700000} className="form-control" id="inputPassword2" placeholder="Price"/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3"> Submit </button>
                </div>
                
            </form>
            
        </div>
    );
}

export default PostCars;
