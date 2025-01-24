import React from 'react'

const Employee = () => {
    let empdetails = [
        { id: 1, name: "Aman", sal: 30000 },
        { id: 2, name: "Gita", sal: 15000 },
        { id: 3, name: "Kanak", sal: 60000 },
        { id: 4, name: "Reshma", sal: 40000 },
        { id: 5, name: "Ruchi", sal: 20000 },
        { id: 6, name: "Dipak", sal: 55000 },
    ]
    let result = empdetails.map(items =>
        <tr key={items.id}>
            <td>{items.id}</td>
            <td>{items.name}</td>
            <td>{items.sal}</td>
        </tr>
    )

    // filter
    let data = empdetails.filter(salary => salary.sal > 30000)
    let filterdata = data.map(items =>
        <tr key={items.id}>
            <td>{items.id}</td>
            <td>{items.name}</td>
            <td>{items.sal}</td>
        </tr>
    )

    return (
        <>
            <table className='table w-50 mx-auto' border={1} >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>

            <hr />
            <h4>Employee list of salary above 30000</h4>
            <table className='table w-50 mx-auto' border={1} >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {filterdata}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Total Data : {filterdata.length}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default Employee
