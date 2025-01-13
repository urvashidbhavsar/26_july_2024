import React from 'react'
import Employee_details from './Employee_details'

const Employee = () => {
    return (
        <>
            <table border={1}>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                </thead>
                <tbody>
                    <Employee_details id="1" name="Rahul" sal="25550" />
                    <Employee_details id="2" name="Priyanshi" sal="30000" />
                    <Employee_details id="3" name="Shital" sal="40000" />
                    <Employee_details id="4" name="Ankita" sal="50000" />
                    <Employee_details id="5" name="Tarun" sal="35000" />
                </tbody>
            </table>
        </>
    )
}

export default Employee
