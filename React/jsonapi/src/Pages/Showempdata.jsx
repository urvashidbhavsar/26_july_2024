import React, { useEffect, useState } from 'react'
import Addempdata from './Addempdata'
import UpdateData from './UpdateData'
import Lists from '../components/Lists'

const Showempdata = () => {
    const { des, city } = Lists();
    const [getdata, setGetdata] = useState([])
    const [updatedata, setUpdatedata] = useState({})

    // create state for sort data
    const [sortid, setSortid] = useState("asc")

    // create state for filterdata after select as per designation
    const [filterdata, setFilterdata] = useState([])
    const [desig, setDesig] = useState("")
    // for checkbox
    const [isDesigEnabled, setIsDesigEnabled] = useState(false)

    const fetchdata = () => {
        fetch("http://localhost:3000/employee")
            .then(res => res.json())
            .then(data => setGetdata(data))
        // .then(data => console.log(data))
    }
    const imgset = {
        height: "100px",
        width: "100px",
        objectFit: "contain"
    }

    useEffect(() => {
        fetchdata()
    }, [])

    useEffect(() => {
        let datafilter = getdata;
        if (desig) {
            datafilter = datafilter.filter(data => data.designation === desig)
        }
        setFilterdata(datafilter)
    }, [desig, getdata])

    const deleteData = (id) => {
        if (confirm("Are you sure want to delete this data?")) {
            fetch(`http://localhost:3000/employee/${id}`, {
                method: "DELETE",
            })
            fetchdata()
        }
    }

    const updateEmpdata = (items) => {
        setUpdatedata(items)
    }

    const sortdata = () => {
        const sorting = [...getdata];
        sorting.sort((a, b) => {
            return sortid === "asc" ? b.id - a.id : a.id - b.id
        })
        setGetdata(sorting);
        setSortid(sortid === "asc" ? "desc" : "asc")
    }

    return (
        <>
            <Addempdata fetchdata={fetchdata} />

            <div className="container py-2">
                <h3 className='bg-success p-2 text-white'>Show Data</h3>

                <div className='row align-items-center'>
                    <div className='col-4'>
                        <input
                            type="checkbox"
                            className='form-check-input'
                            onChange={() => setIsDesigEnabled(!isDesigEnabled)}
                        />
                        <label htmlFor="" className="ms-2">Search by Designation</label>
                    </div>
                    <div className="col-8">
                        <select
                            name="desig"
                            id="desig"
                            className='form-select'
                            onChange={(e) => setDesig(e.target.value)}
                            value={desig}
                            // Disable dropdown if checkbox is not checked
                            disabled={!isDesigEnabled}
                        >
                            <option value="">Select Designation</option>
                            {
                                des.map(item =>
                                    <option key={item} value={item}>{item}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <hr />
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID
                                <button className='btn btn-primary' onClick={sortdata}>
                                    <i className="fa-solid fa-arrows-up-down"></i>
                                </button>
                            </th>
                            <th>Emp name</th>
                            <th>City</th>
                            <th>Mobile No</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Profile</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterdata.length > 0 ?
                                filterdata.map(items =>
                                    <tr key={items.id}>
                                        <td>{items.id}</td>
                                        <td>{items.empname}</td>
                                        <td>{items.city}</td>
                                        <td>{items.mobileno}</td>
                                        <td>{items.designation}</td>
                                        <td>{items.salary}</td>
                                        <td>
                                            <img src={items.profile} style={imgset} />
                                        </td>
                                        <td>
                                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#update_data" onClick={() => updateEmpdata(items)}>Edit</button>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => deleteData(items.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                                :
                                <tr>
                                    <td colSpan={8}>
                                        No Data Found
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>

            <UpdateData update={updatedata} setUpdate={setUpdatedata} refreshdata={fetchdata} />
        </>
    )
}

export default Showempdata
