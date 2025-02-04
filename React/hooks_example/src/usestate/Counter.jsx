import React from 'react'
import { useState } from 'react'

const Counter = () => {
    // create state 
    // first value = state which is do changes
    // 2nd is function= which is change state
    // usestate() = in bracket pass default value
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    return (
        <>
            <div className="container">
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={increment}>Increment</button>
                <p>{count}</p>
            </div>
        </>
    )
}

export default Counter
