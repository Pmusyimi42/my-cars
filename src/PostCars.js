import React, {useState} from 'react';

const PostCars = () => {
    const [year, setYear] = useState(1999)
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [type, setType] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState(700000)

    const formData = {
        year: year,
        make: make,
        model: model,
        type: type,
        image: image,
        price: price
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:5001/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data=> console.log(data),
        document.location.reload())
    }

    console.log(formData)
    
    return (
        <div>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-auto">
                    <input type="number" onChange= {e=>setYear(parseInt(e.target.value))} min= {1999} className="form-control" id="inputPassword2" placeholder="year"/>
                </div>
                <div className="col-auto">
                    <input type="text" onChange= {e=>setMake(e.target.value)} className="form-control" id="inputPassword2" placeholder="Make"/>
                </div>
                <div className="col-auto">
                    <input type="text" onChange= {e=>setModel(e.target.value)} className="form-control" id="inputPassword2" placeholder="Model"/>
                </div>
                <div className="col-auto">
                    <input type="text" onChange= {e=>setImage(parseInt(e.target.value))} className="form-control" id="inputPassword2" placeholder="Image Url"/>
                </div>
                <div className="col-auto">
                    <input type="text" onChange= {e=>setType(e.target.value)} className="form-control" id="inputPassword2" placeholder="Type"/>
                </div>
                <div className="col-auto">
                    <input type="number" onChange= {e=>setPrice(e.target.value)} min = {700000} className="form-control" id="inputPassword2" placeholder="Price"/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3"> Submit </button>
                </div>
                
            </form>
            
        </div>
    );
}

export default PostCars;
