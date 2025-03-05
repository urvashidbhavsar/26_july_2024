import React, { useEffect, useState } from 'react'
import Navigation from '../Components/Navigation'

const Showproduct = () => {
    const [getdata, setGetdata] = useState([])
    // fetch data for update
    const [edit, setEdit] = useState(null);
    // updating data
    const [update, setUpdate] = useState({})

    const setimg = {
        height: "100px",
        width: "100px",
        objectFit: "contain"
    }

    const handleChange = (e) => {
        const changedata = { ...update, [e.target.name]: e.target.value }

        if (e.target.name === "oldprice" || e.target.name === "rate") {
            let price = parseFloat(changedata.oldprice);
            let rate = parseFloat(changedata.rate);
            if (price > 0 && rate > 0) {
                changedata.newprice = Math.round((price - ((price * rate) / 100)))
            } else {
                changedata.newprice = ""
            }
        }
        setUpdate(changedata)
    }

    const fetchdata = () => {
        const productdata = JSON.parse(localStorage.getItem("myproducts"))
        setGetdata(productdata)
        // console.log(productdata);
    }

    useEffect(() => {
        fetchdata()
    }, [])

    const handleDelete = (id) => {
        const deldata = getdata.filter((items) => items.id !== id)
        localStorage.setItem("myproducts", JSON.stringify(deldata))
        setGetdata(deldata)
        // fetchdata()
    }

    const editdata = (product) => {
        setEdit(product)
        setUpdate(product)
    }

    const updateData = (e) => {
        e.preventDefault()
        const product_update = getdata.map(product =>
            product.id === edit.id ? update : product
        )
        localStorage.setItem("myproducts", JSON.stringify(product_update))
        setGetdata(product_update)
        // editdata(null)
    }

    return (
        <>
            <Navigation />

            <div className="container">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Brand</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Rate</th>
                            <th>Image</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getdata.map(items =>
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>{items.brand}</td>
                                    <td>{items.pname}</td>
                                    <td>{items.des}</td>
                                    <td>
                                        <div><s>₹{items.oldprice}</s></div>
                                        <div>₹{items.newprice}</div>
                                    </td>
                                    <td>{items.rate}%</td>
                                    <td>
                                        <img src={items.image} style={setimg} />
                                    </td>
                                    <td>
                                        <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#updatepro" onClick={() => editdata(items)}>
                                            <i className="fa-solid fa-pen"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => handleDelete(items.id)}>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className="modal fade" id="updatepro" tabIndex="-1" aria-labelledby="updateproLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="updateproLabel">Update Product</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div>Id</div>
                                        <input type="number" name="id" className='form-control' disabled value={update.id} />
                                    </div>
                                    <div className="col-12">
                                        <div>Product Name</div>
                                        <input type="text" name="pname" className='form-control' onChange={handleChange} value={update.pname} />
                                    </div>
                                    <div className="col-12">
                                        <div>Brand</div>
                                        <input type="text" name="brand" className='form-control' onChange={handleChange} value={update.brand} />
                                    </div>
                                    <div className="col-12">
                                        <div>Description</div>
                                        <input type="text" name="des" className='form-control' onChange={handleChange} value={update.des} />
                                    </div>
                                    <div className="col-5">
                                        <div>Old Price</div>
                                        <input type="number" name="oldprice" className='form-control' onChange={handleChange} value={update.oldprice} />
                                    </div>
                                    <div className="col-2">
                                        <div>Rate</div>
                                        <input type="number" name="rate" className='form-control' onChange={handleChange} value={update.rate} />
                                    </div>
                                    <div className="col-5">
                                        <div>New Price</div>
                                        <input type="number" name="newprice" className='form-control' onChange={handleChange} value={update.newprice} readOnly />
                                    </div>
                                    <div className="col-12">
                                        <div>Product Image</div>
                                        <input type="text" name="image" className='form-control' onChange={handleChange} value={update.image} />
                                    </div>
                                    <div className="col-6">
                                        <button className='btn btn-primary' onClick={updateData}>Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showproduct
