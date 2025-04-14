import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../logic/cartSlice';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

const ProductPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const product = [
        {
            id: 1,
            pname: "Microsoft Surface Laptop GO 3 Touch Screen",
            price: 60000,
            profile: "https://m.media-amazon.com/images/I/71DozMyPCBL.jpg"
        },
        {
            id: 2,
            pname: "Dell",
            price: 50000,
            profile: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/dv3520nt-cnb-05000ff090-gy-paint.png"
        }
    ]

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        navigate('/cart'); //
    };
    return (
        <>
            <div className="container py-2">
                <Nav />

                <div className="row py-3">
                    {
                        product.map(item =>
                            <div className="col-3" key={item.id}>
                                <div className="card p-3">
                                    <img src={item.profile} alt="" />
                                    <h5>{item.pname}</h5>
                                    <div>₹{item.price}</div>
                                    <button
                                        className="btn btn-primary mt-2"
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ProductPage
