import React, { useEffect, useState } from 'react'

const Timing = () => {
    const [count, setCount] = useState(0)

    // useEffect is a callback function 
    // first value is function, 2nd value is dependency which is null or any state value
    useEffect(() => {
        setInterval(() => {
            setCount(count + 1)
        }, 1000);
    }, [])

    return (
        <>
            <p>{count}</p>
        </>
    )
}

export default Timing
