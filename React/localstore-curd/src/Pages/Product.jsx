import React, { useState } from 'react'
import Navigation from '../Components/Navigation'
import { Link } from 'react-router-dom'

const Product = () => {
    const [input, setInput] = useState({
        id: "",
        pname: "",
        brand: "",
        des: "",
        oldprice: "",
        newprice: "",
        image: ""
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let existdata = JSON.parse(localStorage.getItem("myproducts")) || []
        let getdata = [...existdata, input]
        localStorage.setItem("myproducts", JSON.stringify(getdata))
        alert("Data added successfully")

        setInput({
            id: "",
            pname: "",
            brand: "",
            des: "",
            oldprice: "",
            newprice: "",
            image: ""
        })
    }
    return (
        <>
            <Navigation />

            <div className="container">
                <h4 className='py-3 border-2 border-bottom border-danger'>Add product</h4>
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-6">
                            <input type="number" name="id" placeholder='ID' className='form-control' required onChange={handleChange} value={input.id} />
                        </div>
                        <div className="col-6">
                            <input type="text" name="pname" placeholder='Product Name' className='form-control' required onChange={handleChange} value={input.pname} />
                        </div>
                        <div className="col-6">
                            <input type="text" name="brand" placeholder='Product Brand' className='form-control' required onChange={handleChange} value={input.brand} />
                        </div>
                        <div className="col-6">
                            <input type="text" name="des" placeholder='Product Description' className='form-control' required onChange={handleChange} value={input.des} />
                        </div>
                        <div className="col-6">
                            <input type="number" name="oldprice" placeholder='Old Price' className='form-control' required onChange={handleChange} value={input.oldprice} />
                        </div>
                        <div className="col-6">
                            <input type="number" name="newprice" placeholder='New Price' className='form-control' required onChange={handleChange} value={input.newprice} />
                        </div>
                        <div className="col-12">
                            <input type="text" name="image" placeholder='Image URL' className='form-control' required onChange={handleChange} value={input.image} />
                        </div>
                        <div className="col-6">
                            <button className='btn btn-primary'>Add Product</button>
                        </div>
                    </div>
                </form>

                <div className='py-2'>
                    <Link to="/Showproduct">Show Product</Link>
                </div>
            </div>

        </>
    )
}

export default Product
