import React, { useState } from 'react'
import { useCallback } from 'react'

const CallbackExample = () => {
    const [count, setCount] = useState(0)

    const handleEvent = useCallback(() => {
        setCount(count + 1)
    })
    return (
        <div>
            <button onClick={handleEvent}>Click</button>
            <p>{count}</p>
        </div>
    )
}

export default CallbackExample
