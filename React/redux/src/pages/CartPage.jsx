import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from './Nav';

const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const [count, setCount] = useState(1)

    return (
        <div className="container py-2">
            <Nav />
            <h2>Your Cart</h2>
            <div className="row g-2">
                {
                    cart.length === 0 ? (
                        <p>Cart is empty.</p>
                    ) : (
                        cart.map((item, index) => (
                            <div className="col-6" key={index} >
                                <div className="card p-2 mb-2">
                                    <img src={item.profile} alt={item.pname} style={{ width: '100px' }} />
                                    <h5>{item.pname}</h5>
                                    <div className='d-flex gap-3'>
                                        <div className='fs-5'>₹ {item.price}</div>
                                        <div className='d-flex'>
                                            <button className='btn btn-dark mx-1' onClick={() => setCount(count - 1)}>-</button>
                                            <input type="number" className='form-control w-25' value={count} />
                                            <button className='btn btn-dark mx-1' onClick={() => setCount(count + 1)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
            </div>
        </div>
    );
};

export default CartPage;
