import React, { useRef } from 'react'

const RefExample = () => {
    const inputref = useRef(null)

    const handleEvent = () => {
        inputref.current.focus()
    }
    return (
        <>
            <button onClick={handleEvent}>Click here</button>
            <input type="text" name="" id="" ref={inputref} />
        </>
    )
}

export default RefExample
