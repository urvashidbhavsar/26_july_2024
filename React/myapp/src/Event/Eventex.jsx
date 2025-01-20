import React from 'react'

const Eventex = () => {

    let msg = () => {
        alert("Welcome user")
    }
    return (
        <>
            <button className='btn btn-primary' onClick={msg}>Click</button>

            <button className='btn btn-warning' onClick={() => alert("Welcome new user")}>click</button>
        </>
    )
}

export default Eventex
