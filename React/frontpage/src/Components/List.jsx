import React from 'react'
import Iconsetup from './Iconsetup'

const List = ({ menuItems, cls }) => {
    // const mylist = ["All", "Skill"]
    return (
        <>
            {
                menuItems.map(items =>
                    <li key={items}>
                        <a className={cls} href="">
                            {/* <Iconsetup icon={myicon}></Iconsetup> */}
                            {items}</a>
                    </li>
                )
            }
        </>
    )
}

export default List
