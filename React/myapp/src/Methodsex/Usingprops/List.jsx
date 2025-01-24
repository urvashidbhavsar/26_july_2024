import React from 'react'

const List = ({ menuItems }) => {
    return (
        <>
            {
                menuItems.map(menu =>
                    <li key={menu}>
                        <a href="">{menu}</a>
                    </li>
                )
            }
        </>
    )
}

export default List
