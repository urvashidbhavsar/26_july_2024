import React, { createContext, useContext, useState } from 'react'

const Usercontext = createContext()

const Componentcontext = () => {
    const [user, setUser] = useState("Hello world")
    return (
        <>
            <Usercontext.Provider value={user}>
                <h3>Component 1</h3>
                <Component2 />
            </Usercontext.Provider>
        </>
    )
}
const Component2 = () => {
    return (
        <>
            <h3>Component 2</h3>
            <Component3 />
        </>
    )
}
const Component3 = () => {
    return (
        <>
            <h3>Component 3</h3>
            <Component4 />
        </>
    )
}
const Component4 = () => {
    return (
        <>
            <h3>Component 4</h3>
            <Component5 />
        </>
    )
}
const Component5 = () => {
    const user = useContext(Usercontext)
    return (
        <>
            <h3>Component 5</h3>
            <h1>{user}</h1>
        </>
    )
}

export default Componentcontext
