import React, { useState } from 'react'

const Userinput = () => {
    const [input, setInput] = useState("");
    const [city, setCity] = useState("");

    const citylist = ["Surat", "Baroda", "Bharuch", "Rajkot", "Somnath", "Vapi", "Navsari"]
    return (
        <>
            <div className="container py-3">
                <div className="row g-3">
                    <div className="col-12">
                        <input type="text" name="" value={input} placeholder='Name' onChange={(e) => setInput(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <select name="" value={city} onChange={(e) => setCity(e.target.value)}>
                            <option>---select---</option>
                            {
                                citylist.map(items =>
                                    <option key={items} value={items}>
                                        {items}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                </div>

                <p>Name : {input}</p>
                <p>City : {city}</p>
            </div>
        </>
    )
}

export default Userinput
