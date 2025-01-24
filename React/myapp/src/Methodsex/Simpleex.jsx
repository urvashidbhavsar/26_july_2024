import React from 'react'

const Simpleex = () => {
    let list = ["list 1", "list 2", "list 3", "list 4", "list 5", "list 6"]

    let result = list.map((items, index) =>
        <li key={index}>{items}</li>
    )
    return (
        <>
            <ul className='d-flex gap-3'>
                {result}
            </ul>
        </>
    )
}

export default Simpleex
