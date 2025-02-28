import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    const menu = [
        { pathname: "Home", path: "/Home" },
        { pathname: "Product", path: "/Product" }
    ]
    return (
        <>
            {
                menu.map(items =>
                    <li key={items.pathname} className='px-2'>
                        <Link to={items.path}>{items.pathname}</Link>
                    </li>
                )
            }
        </>
    )
}

export default List
