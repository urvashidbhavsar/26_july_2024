import React from 'react'
import List from './List'

const Menulist = () => {
    let menus = ["Home", "About", "Services", "Blog", "Pages", "Contact"]

    return (
        <>
            <ul className='d-flex gap-4'>
                {
                    <List menuItems={menus} />
                }
            </ul>
        </>
    )
}

export default Menulist
