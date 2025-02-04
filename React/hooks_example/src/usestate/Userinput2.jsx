import React, { useState } from 'react'

const Userinput2 = () => {
    // set object for create multiple state
    const [input, setInput] = useState({
        username: "",
        city: ""
    });

    const setupdate = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const citylist = ["Surat", "Baroda", "Bharuch", "Rajkot", "Somnath", "Vapi", "Navsari"]
    return (
        <>
            <div className="container py-3">
                <div className="row g-3">
                    <div className="col-12">
                        <input type="text" name="username" value={input.username} placeholder='Name' onChange={setupdate} />
                    </div>
                    <div className="col-12">
                        <select name="city" value={input.city} onChange={setupdate}>
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

                <p>Name : {input.username}</p>
                <p>City : {input.city}</p>
            </div>
        </>
    )
}

export default Userinput2
