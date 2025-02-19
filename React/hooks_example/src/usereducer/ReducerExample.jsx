import React, { useReducer } from 'react'

const initvalue = 0;
const arithmetic = (mystate, action) => {
    switch (action) {
        case "add":
            return mystate + 1
        case "subtract":
            return mystate - 1
        case "multiply":
            return mystate * 2
        case "reset":
            return 0
    }
}
const ReducerExample = () => {
    const [state, setState] = useReducer(arithmetic, initvalue)

    return (
        <>
            <button onClick={() => setState("add")}>Add</button>
            <button onClick={() => setState("subtract")}>Subtract</button>
            <button onClick={() => setState("multiply")}>Multiply</button>
            <button onClick={() => setState("reset")}>Reset</button>

            <p>Value : {state}</p>
        </>
    )
}

export default ReducerExample
