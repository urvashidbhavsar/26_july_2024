import React, { useState } from 'react'

const Employee = () => {
    const empdata = [
        { id: 1, empname: "Rohan", salary: 32000 },
        { id: 2, empname: "Ketan", salary: 18000 },
        { id: 3, empname: "Kiran", salary: 20000 },
        { id: 4, empname: "Richa", salary: 34000 },
        { id: 5, empname: "Poonam", salary: 42000 },
        { id: 6, empname: "Foram", salary: 35500 },
        { id: 7, empname: "Divya", salary: 26000 },
    ]
    const [data, setData] = useState(empdata);
    // state for search
    const [search, setSearch] = useState("")
    // state for filter
    const [filterdata, setFilter] = useState(data)

    const handleChanges = (e) => {
        let val = e.target.value
        setSearch(val);
        let filter_data = data.filter(emp => emp.salary > val)
        if (val) {
            setFilter(filter_data)
        } else {
            setFilter(data)
        }
    }

    return (
        <div>
            <div className="container">
                <div className='py-3 w-50'>
                    <input type="search" placeholder='Filter by salary' className='form-control' value={search} onChange={handleChanges} />
                </div>

                <table border={1} className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Employee</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterdata.length > 0 ?
                                (filterdata.map(items =>
                                    <tr key={items.id}>
                                        <td>{items.id}</td>
                                        <td>{items.empname}</td>
                                        <td>{items.salary}</td>
                                    </tr>
                                )) :
                                <tr>
                                    <td colSpan={3}>
                                        <div class="alert alert-danger" role="alert">
                                            Data not found
                                        </div>
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee
