import React from 'react'
import useApi from './useApi'

const Fetchdata = () => {
    const [getapi] = useApi("https://fakestoreapiserver.reactbd.com/users")

    return (
        <>
            <table border={1} className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // console.log(getapi)
                        getapi.map(items =>
                            <tr key={items._id}>
                                <td>{items._id}</td>
                                <td>{items.name}</td>
                                <td>{items.username}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </>
    )
}

export default Fetchdata
