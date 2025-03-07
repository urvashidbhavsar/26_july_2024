import React, { useEffect, useState } from 'react'
import Addempdata from './Addempdata'

const Showempdata = () => {
    const [getdata, setGetdata] = useState([])

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

    return (
        <>
            <Addempdata fetchdata={fetchdata} />

            <div className="container py-2">
                <h3 className='bg-success p-2 text-white'>Show Data</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Emp name</th>
                            <th>City</th>
                            <th>Mobile No</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getdata.map(items =>
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
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Showempdata
