import React from 'react'

// props pass as argument and used as attribute
const Username = (props) => {
    return <div>{props.uname}</div>
}

//pass as attribute
const Props_ex1 = () => {
    return (
        <>
            <Username uname="Tarun" />
            <Username uname="Priyank" />
            <Username uname="Rahul" />
            <Username uname="Kajal" />
        </>
    )
}

export default Props_ex1
