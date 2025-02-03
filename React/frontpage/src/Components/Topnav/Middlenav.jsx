import React from 'react'
import List from '../List'
import '../../App.css'

const Middlenav = () => {
    const mynav = ["All", "MX player", "Sell", "Best sellar", "Mobiles", "Today's Deal", "Electronics", "Customer Service", "Amazon Pay", "Prime", "Home & Kitchen", "New Release", "Fashion", "Computer"]
    return (
        <>
            <section className='middlenav topnav'>
                <div className='container-fluid'>
                    <ul className='list-unstyled d-flex justify-content-between py-2 m-0'> 
                        <List menuItems={mynav} cls="text-white text-decoration-none" />
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Middlenav
