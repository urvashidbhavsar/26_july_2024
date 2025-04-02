import React, { useState } from 'react'
import { adduser } from '../logic/empSlice'
import { useDispatch, useSelector } from 'react-redux'

const EmployeeReg = () => {
    const dispath = useDispatch()
    const [input, setInput] = useState({
        uname: "",
        doj: "",
        sal: "",
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const empdata = useSelector(data => data.userdata.emps)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispath(adduser(input))
        alert("employee data added successfully")
        setUname("")
        setDoj("")
        setSal("")
    }


    return (
        <>
            <div className="container">
                <h3>Employee data entry</h3>
                <div className="row g-2 w-50">
                    <div className="col-12">
                        <div>Enter name: </div>
                        <input type="text" placeholder='Enter name' className='form-control' value={input.uname} onChange={handleChange} name="uname" />
                    </div>
                    <div className="col-12">
                        <div>Date of Join</div>
                        <input type="date" className='form-control' value={input.doj} onChange={handleChange} name="doj" />
                    </div>
                    <div className="col-12">
                        <div>Salary</div>
                        <input type="number" placeholder='Enter Salary' className='form-control' value={input.sal} onChange={handleChange} name="sal" />
                    </div>
                    <div className="col-12">
                        <button className='btn btn-success' onClick={handleSubmit}>Add Data</button>
                    </div>
                </div>

                <table className='table w-50'>
                    <thead>
                        <tr>
                            <th>Emp name</th>
                            <th>Emp Doj</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empdata.map(item =>
                                <tr>
                                    <td>{item.uname}</td>
                                    <td>{item.doj}</td>
                                    <td>{item.sal}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmployeeReg
