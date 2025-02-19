import React, { useMemo, useState } from 'react'

const Memoexample = () => {
    const [count, setCount] = useState(0)
    const doublecount = useMemo(() => count * 2, [count])

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <p>count : {count}</p>
            <p>doubleCount : {doublecount}</p>
        </>
    )
}

export default Memoexample
