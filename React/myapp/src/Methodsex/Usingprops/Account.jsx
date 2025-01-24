import React from 'react'
import List from './List'

const Account = () => {
    let account = ["login", "registration"]
    return (
        <>
            <ul className='d-flex gap-4'>
                {
                    <List menuItems={account} />
                }
            </ul>
        </>
    )
}

export default Account
