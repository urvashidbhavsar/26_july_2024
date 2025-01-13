import React from 'react'

const Employee_details = (props) => {
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.sal}</td>
            </tr>
        </>
    )
}

export default Employee_details

