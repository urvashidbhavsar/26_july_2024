import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = () => {
    const cart = useSelector((state) => state.cart);
    return (
        <>
            <div className='d-flex justify-content-between align-items-center'>
                <h4>Logo</h4>
                <ul className='list-unstyled'>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <div className="position-relative">
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cart.length}
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Nav
