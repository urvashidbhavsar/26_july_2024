import React from 'react'

const Conditionex = () => {
    const Person = ({ name, city }) => {
        if (city === "surat") {
            return <div>{name} 🌆</div>
        } else {
            return <div>{name} 🏙</div>
        }
    }

    // const Person = ({ name, city }) => {
    //     let result = (city === "surat") ? <div>{name} 🌆</div> : <div>{name} 🏙</div>

    //     return result 
    // }


    return (
        <>
            <Person name="Rita" city="surat" />
            <Person name="Nirav" city="Vapi" />
            <Person name="Foram" city="Bardoli" />
            <Person name="Gita" city="surat" />
            <Person name="Gagan" city="Rajkot" />
            <Person name="Brijesh" city="surat" />
        </>
    )
}

export default Conditionex
